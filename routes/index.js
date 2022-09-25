const express = require('express');
const router = express.Router();


  // GET Route for the landing page

module.exports = (db) => {
  router.get("/", (req, res) => {
    if (req.session.user_id) {
      res.redirect("community Maps and Favorites"); //change this
    } else {
      res.redirect("/");
    }
    })

}
  module.exports = router;
