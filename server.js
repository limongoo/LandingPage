'use strict';

const pg = require('pg');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const constring = 'postgres://tanyagriego@localhost:5432/';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.get('/', function(request, response) {
  response.sendFile('./public/index.html');
});

app.listen(PORT, function() {
  console.log(`Listening on port:${PORT}`);
});
