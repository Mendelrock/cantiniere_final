const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
var admin = require('firebase-admin');

var serviceAccount = require('./system/serviceAccountKey.json');

var app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://food-for-fun-bdd.firebaseio.com/'
});

