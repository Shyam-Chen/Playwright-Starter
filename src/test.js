const functions = require('firebase-functions');
const admin = require('firebase-admin');

functions.config = jest.fn(() => ({
  firebase: {
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://not-a-project.firebaseio.com',
    storageBucket: 'not-a-project.appspot.com',
  },
}));

const { helloWorld, addMessage, makeUppercase } = require('./');

describe('helloWorld', () => {
  it('returns a string', (done) => {
    const mockRequest = {
      method: 'GET',
    };

    const mockResponse = {
      status: (code) => {
        expect(code).toEqual(200);

        return {
          send: jest.fn((message) => {
            expect(message).toBe('Hello, World!');
            done();
          }),
        };
      },
    };

    helloWorld(mockRequest, mockResponse);
  });
});

describe('addMessage', () => {
  it('returns a 303 redirect', (done) => {
    const refStub = jest.fn(location => ({
      push: jest.fn((data) => {
        const mockSnapshot = { ref: location, val: jest.fn(() => data) };
        return Promise.resolve(mockSnapshot);
      }),
    }));

    Object.defineProperty(admin, 'database', {
      get: () => (() => ({ ref: refStub })),
    });

    const mockRequest = {
      query: {
        text: 'some message',
      },
    };

    const mockResponse = {
      redirect: (code, path) => {
        expect(code).toEqual(303);
        expect(path).toEqual('/messages');
        done();
      },
    };

    addMessage(mockRequest, mockResponse);
  });
});

describe('makeUppercase', () => {
  it('upper cases input and writes it to /uppercase', () => {
    const testInput = 'some value to uppercase';
    const expectedOutput = testInput.toUpperCase();

    const fakeEvent = {
      data: new functions.database.DeltaSnapshot(null, null, null, testInput),
      params: { pushId: 'test' },
    };

    const refStub = jest.fn(() => ({
      parent: {
        child: jest.fn(childName => ({
          set: jest.fn(val => Promise.resolve({ ref: childName, val })),
        })),
      },
    }));

    Object.defineProperty(fakeEvent.data, 'ref', { get: refStub });

    const expectedObject = { ref: 'uppercase', val: expectedOutput };

    return makeUppercase(fakeEvent).then(result => expect(result).toEqual(expectedObject));
  });
});
