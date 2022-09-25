const express = require('express');
const router = express.Router();


  // GET Route for the landing page
  app.get('/', (req, res) => {
    const templateVars = {user: null}
    res.render("/", templateVars)
  });

  //INDEX Page does not need routing except to original page because the page is just going to use link tags to move to login and register
