import express from 'express';
import cors from 'cors';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

/**
 * @name hello-world
 * @example https://us-central1-web-go-demo.cloudfunctions.net/helloWorld
 */
export const helloWorld = functions.https
  .onRequest((req, res) => {
    res.status(200).send('Hello, World!');
  });

/**
 * @name admin
 * @example https://us-central1-web-go-demo.cloudfunctions.net/addMessage?text=${text}
 */
export const addMessage = functions.https
  .onRequest((req, res) => {
    const original = req.query.text;

    admin.database()
      .ref('/messages')
      .push({ original })
      .then((snapshot) => {
        res.redirect(303, snapshot.ref);
      });
  });

/**
 * @name realtime-database
 * @example original -> uppercase
 */
export const makeUppercase = functions.database
  .ref('/messages/{pushId}/original')
  .onWrite((event) => {
    const original = event.data.val();
    const uppercase = original.toUpperCase();

    return event.data.ref.parent.child('uppercase').set(uppercase);
  });

/**
 * @name cloud-firestore
 */
// export const createUser = functions.firestore
//   .document('users/{userId}')
//   .onCreate((event) => {
//     const data = event.data.data();
//
//     return event.data.ref.set({ name: data.name });
//   });

/**
 * @name cloud-storage
 */

/**
 * @name authentication
 */

/**
 * @name cloud-pub-sub
 */

/**
 * @name api-server
 */
const app = express();

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

export const api = functions.https.onRequest(app);
