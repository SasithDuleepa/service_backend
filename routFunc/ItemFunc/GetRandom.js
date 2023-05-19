const DB = require('../../config/database');

const RandomItems = async(req,res)=>{
    const sql = `SELECT * FROM post ORDER BY RAND() LIMIT 10`;
    DB.connection.query(sql, (err, result) => {
        if (err){
        res.status(500).send(err);
    }else{
        res.status(200).send(result);
    }
})

};

module.exports = RandomItems;