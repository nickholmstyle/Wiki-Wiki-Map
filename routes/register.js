/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const express = require('express');
const cookieSession = require("cookie-session");
const router  = express.Router();

//////////////////////////////////////////
// GET Request for the Register Page //
//////////////////////////////////////////

app.get('/register', (req, res) => {
  if (req.session.user_id) {
    return res.redirect('/communitymaps AND favorite page');
  }
  const templateVars = { user: users[req.session.user_id] };
  res.render('register', templateVars);
});
//////////////////////////////////////////
// POST Request from the Register Page //
//////////////////////////////////////////

app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  //error handling, if user and password are zero return error
  if (email.length === 0 || password.length === 0) {
    return res.status(400).send(`400 error - Missing E-mail or Password`);
  }

  //define an emailfinder function to check the email against the db, to see if the email already exists.


  //password added in to the password property
  const user = { name, email, password, id }

  users[id] = user;
  req.session.user_id = id;
  res.redirect(`/communitymapsandfavorites`);
});

module.exports = router;
