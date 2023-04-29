const mysql = require('mysql');

class Database {
    constructor(){
        this.connection = mysql.createConnection({
            host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'serviceLK'});
    }

    connect(){
        this.connection.connect((err)=>{
            if(err) {
                console.log('Error connecting to database');
                return;
            }
            console.log('Connected to database');
        });
        
    }

    disconnect(){
        this.connection.end((err)=>{
            
            if(err) {
                console.log('Error disconnecting from database');
                return;
            }
            console.log('Disconnected from database');
        });
    

}
}

module.exports = new Database;