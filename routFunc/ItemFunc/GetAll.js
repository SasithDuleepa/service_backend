const DB = require('../../config/database');

const GetAll = ( req, res) => {
    res.send("hello");
    console.log("hello");
    // try {
    //     const sql = 'SELECT * FROM post';
    //     res.send(sql);
    //     console.log("kskkkkkkk");
    //     DB.connection.query(sql, (err, result) => {
    //         if(result){
    //             console.log(result);
    //         }
    //     })
    // } catch (error) {
    //     console.log(error);
    // }
}

module.exports = GetAll;