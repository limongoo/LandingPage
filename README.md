# reFresh - Landing Page Generator

### Created by LIT Squad:
- Langston McClarron - https://github.com/LangstonMac
- Ivan Limongan - https://github.com/limongoo
- Tanya Griego - https://github.com/tanyagriego


### Live Project:

### Repository: 
https://github.com/limongoo/LandingPage

### Project Description
Welcome to reFRESH! This site is built for you to create however and whatever you want.

Quick tutorial: on the left hand side of the page you have two options (a lock or refresh button). By clicking the refresh button it will randomize font style/color, background image,background color or gradient style. Once you've found what you like, LOCK it! Continue through the other options until you are satisfied. Love what you have? Press the "Copy Code" button and bring the creation to your own site! Enjoy!

### Installation
1. Install dependencies 
```
npm install
```
2. Log into your Postgres database and start it
2. On Postgres, create new database called 'landinguser', or whatever you want to call it (make sure to change it on server.js if you want to use your own database or own name)
3. Change your conString login using your own login on line 10 on server.js
4. Request token from Unsplash API, token in a file called token.js and put in 'js' folder and put in .gitignore also
5. Start node server
```
node server.js
```
6. Localhost:3000 on browser
7. Give reFresh a try!

Note: Users and Styles tables will auto create through server.js

### Credits
- Photos from Unsplash API: https://unsplash.com/developers
- Fonts from Google Fonts: https://fonts.google.com/