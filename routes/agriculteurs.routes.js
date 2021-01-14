const router = require("express").Router();
const connection = require('../db_connection');

    router.get("/",(req,res) => {
        const sql="SELECT a.farm_size,c.zipcode,c.city,c.lat,c.longitude FROM agriculteurs AS a JOIN cities AS c ON c.id=a.city_id";
        connection.query(sql,(err, result) =>{
            if (err){
                res.status(500).json({errorMessage: err.message});
            } else{
                res.status(200).json(result);
            }
        })
    })
    router.get("/:id",(req,res) => {
        const {id}= req.params;
        const sql=`SELECT a.farm_size,c.zipcode,c.city,c.lat,c.longitude FROM agriculteurs AS a JOIN cities AS c ON c.id=a.city_id WHERE a.id=${id}`;
        connection.query(sql,(err, result) =>{
            if (err){
                res.status(500).json({errorMessage: err.message});
            } else{
                res.status(200).json(result[0]);
                
            }
        })
    })

module.exports = router;
