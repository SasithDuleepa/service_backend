const DB = require('../../config/database')

const LatestPosts = async (req, res) => {
    const sql = "SELECT * FROM post ORDER BY post_id DESC LIMIT 5";
    DB.connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(result)
        }
})
};


module.exports = LatestPosts;