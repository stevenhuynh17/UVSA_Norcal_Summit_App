// import * as admin from 'firebase-admin';
var admin = require('firebase-admin')
// var ApiKeys = require('../constants/ApiKeys.js')
import ApiKeys from '../constants/ApiKeys.js'

console.log(ApiKeys.storageBucket)

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  storageBucket: ApiKeys.storageBucket
});

let createUsers = (person) => {
  let { email, phone, password, name, photo } = person

  admin.auth().createUser({
    email: email,
    emailVerified: false,
    phoneNumber: phone,
    password: password,
    displayName: name,
    photoURL: photo,
    disabled: false
  }).then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch(function(error) {
    console.log('Error creating new user:', error);
  });
}

let pictures = () => {
  let bucket = admin.storage().bucket();
  // bucket.getFiles((err, files) => {
  //   if(!err) {
  //     console.log(files[0].metadata.selfLink)
  //   }
  // })
  // bucket.upload('../App.js', (err, file, apiResponse) => {
  //   console.log(err)
  //   console.log(file)
  //   console.log(apiResponse)
  // })

}

pictures()
