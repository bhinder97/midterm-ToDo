const express = require('express');
const router  = express.Router();

let queryString = `
DELETE FROM tasks
WHERE tasks.task = $1;
`

//Route "/home/delete"
module.exports = (db) => {
  router.post("/:delete", (req, res) => {
    db.query(queryString, [req.params])
    .then(result => {
      console.log(result.rows)
      return res.status(302).redirect("/")
    })
    .catch(err => {
      console.log(err)
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
};