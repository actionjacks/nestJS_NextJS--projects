import * as functions from "firebase-functions";

type User = {
  admin: boolean
  uid: string
}

const admin = require('firebase-admin')
admin.initializeApp()

exports.addAdminRole = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user: User) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      })
    })
})