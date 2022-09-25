const express = require('express');
const router  = express.Router();


module.exports = (db) => {

//////////////////////////////////////////
// GET Request for the Login Page //
//////////////////////////////////////////

  router.get("/login", (req, res) => {
    res.render("login");
    let query = `SELECT * FROM users`;
    db.query(query)
    .then(data => {
      const users = data.rows;
    })
  });

//////////////////////////////////////////
// POST Request for the Login Page //
//////////////////////////////////////////
  router.post("/login", (req, res) => {
    let query = /*`SELECT * FROM users`; CHANGE USERS WHEN WE KNOW THE DB NAME*/
    db.query(query)
    .then(data => {
      const users = data.rows;
      users.forEach(user => {
        if (user.email === req.body.email && user.password === req.body.password) {
          req.session.user_id = user.id;
          res.redirect('/community maps and favorites');
        }
      });
    })
  });

  //return router;
};

module.exports = router;
