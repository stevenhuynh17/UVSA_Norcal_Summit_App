// import * as admin from 'firebase-admin';
var admin = require('firebase-admin')
// var ApiKeys = require('../constants/ApiKeys.js')
import ApiKeys from '../constants/ApiKeys.js'

let test = () => {
  console.log("TESTING")
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    ApiKeys
  });

  admin.auth().createUser({
    email: "booyah@gmail.com",
    emailVerified: false,
    phoneNumber: '+12342523',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false
  }).then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch(function(error) {
    console.log('Error creating new user:', error);
  });
}

test()
