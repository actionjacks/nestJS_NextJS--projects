import * as functions from "firebase-functions";

import admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user: any) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Sucess !${data.email}`,
      };
    })
    .catch((err: any) => {
      console.log(err);
    });
});
