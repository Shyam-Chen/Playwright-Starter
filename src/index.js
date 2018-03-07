/**
 * @const {string} API_URL
 * https://us-central1-web-go-demo.cloudfunctions.net
 */

import express from 'express';
import cors from 'cors';

import textList from './text-list';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

/**
 * @name hello-world
 * @example /helloWorld
 */
export const helloWorld = functions.https
  .onRequest((req, res) => {
    res.status(200).send('Hello, World!');
  });

/**
 * @name admin
 * @example /addMessage?text=${text}
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
 * @example messages: original -> uppercase
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
// ...

/**
 * @name authentication
 */
// ...

/**
 * @name cloud-pub-sub
 */
// ...

/**
 * @name api-server
 */
const app = express();

app.use(cors({ origin: true }));

/**
 * @example GET /api/hello-world
 */
app.get('/hello-world', (req, res) => {
  res.status(200).send('Hello, World!');
});

/**
 * @example GET /api/text-list
 */
app.use('/text-list', textList);

/**
 * @name api-root
 */
export const api = functions.https.onRequest(app);
