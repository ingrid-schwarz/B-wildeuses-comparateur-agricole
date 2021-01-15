const router = require("express").Router();
const connection = require('../db_connection');

router.get("/", (req, res) => {
  const sql = "SELECT c.zipcode, c.city, c.lat, c.longitude, a.city_id FROM  cities AS c JOIN agriculteurs AS a ON a.city_id=c.id WHERE c.zipcode LIKE '28%'";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
})
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT c.zipcode, c.city, c.lat, c.longitude, a.city_id FROM  cities AS c JOIN agriculteurs AS a ON a.city_id=c.id WHERE a.city_id IS NOT NULL AND c.id=${id}`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result[0]);
    }
})
});

module.exports = router;

