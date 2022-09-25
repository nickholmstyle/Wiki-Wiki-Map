

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

//////////////////////////////////////////
// GET Request for the Register Page //
//////////////////////////////////////////

  router.get("register", (req, res) => {
    res.render("/register");
  });

//////////////////////////////////////////
// POST Request for the Register Page //
//////////////////////////////////////////

  router.post("/request", (req, res) => {
    let values = [req.body.email, req.body.password];
    let query = /*`SELECT * FROM users2 WHERE email = $1 AND password = $2`;*/
    //compare the data to our db first
    db.query(query, values)
      .then(data => {
      let result = data.rows;
      if (result.length === 0) {
        //if the results come back with 0 matches, assign new values to variable and insert into table
        let newVals = [req.body.name, req.body.email, req.body.password];
        let insertQuery = /*`INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING *`;*/
        db.query(insertQuery, newVals)
        .then(newVals => {
          req.session.user_id = newVals.rows[0].id; //may need to change the userid  depending on db name
          res.redirect('/community and Favorite maps');
        })
      } else {
        res.send('Email is already in use.');
      }
    })
  });

  return router;
}

module.exports = router;
