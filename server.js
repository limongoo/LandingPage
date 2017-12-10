'use strict';

const pg = require('pg');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const constring = 'postgres://tanyagriego@localhost:5432/landinguser';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.get('/', function(request, response) {
  response.sendFile('./public/index.html');
});

app.listen(PORT, function() {
  console.log(`Listening on port:${PORT}`);
});

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    users (
      user_id SERIAL PRIMARY KEY,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      username VARCHAR(255),
      password VARCHAR(255)
    );`
  )
  client.query(`
    CREATE TABLE IF NOT EXISTS
    styles (
      styles_id SERIAL PRIMARY KEY,
      font VARCHAR(255),
      font_color VARCHAR(255),
      background_image VARCHAR(255),
      color_overlay VARCHAR(255),
      gradient_overlay VARCHAR(255),

    )


    `)
}
