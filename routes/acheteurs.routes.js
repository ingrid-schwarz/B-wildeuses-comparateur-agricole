const router = require("express").Router();
const connection = require('../db_connection');

router.get("/", (req, res) => {
    const sql = "SELECT ac.city_id, ac.name, ac.type, c.zipcode, c.city, c.lat, c.longitude FROM acheteurs AS ac JOIN cities AS c ON c.id=ac.city_id";
    connection.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ errorMessage: err.message });
      } else {
        res.status(200).json(result);
      }
  })
  });



module.exports = router;