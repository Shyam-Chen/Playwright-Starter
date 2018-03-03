const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

export const helloWorld = functions.https.onRequest((req, res) => {
  res.status(200).send('Hello, World!');
});

export const addMessage = functions.https.onRequest((req, res) => {
  const original = req.query.text;

  admin.database()
    .ref('/messages')
    .push({ original })
    .then((snapshot) => {
      res.redirect(303, snapshot.ref);
    });
});

export const makeUppercase = functions.database.ref('/messages/{pushId}/original').onWrite((event) => {
  const original = event.data.val();
  const uppercase = original.toUpperCase();

  return event.data.ref.parent.child('uppercase').set(uppercase);
});
