'use strict';

const pg = require('pg');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const conString = 'postgres://ivanlimongan@localhost:5432/landinguser';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('./public/index.html');
});

app.listen(PORT, function() {
  console.log(`Listening on port:${PORT}`);
});

// INSERT RECORD
app.post('/signup', function(request, response) {
  client.query(
    `INSERT INTO users (first_name, last_name, username, password)
    VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING;`,
    [request.body.first_name,
    request.body.last_name,
    request.body.username,
    request.body.password]
  )
  .then(function() {
    response.send('Insert Complete')
  })
  .catch(function(err) {
    console.error(err)
  });
});

// Check password in record
app.post('/login', function(request, response) {
  client.query(
    `SELECT * FROM users 
    WHERE username = $1 AND password = $2`,
    [request.body.username,
    request.body.password]
  )
  .then(function() {
    response.send('Verified')
  })
  .catch(function(err) {
    console.error(err)
  });
});

// CREATE TABLES
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
  );
  client.query(`
    CREATE TABLE IF NOT EXISTS
    styles (
      styles_id SERIAL PRIMARY KEY,
      font VARCHAR(255),
      font_color VARCHAR(255),
      background_image VARCHAR(255),
      color_overlay VARCHAR(255),
      gradient_overlay VARCHAR(255)
    );`
  );
}
loadDB();