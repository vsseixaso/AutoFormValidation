const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'tcc',
    user     : 'root',
    password : 'Cr0w$p1ke',
});

const openConnection = () => {
    connection.connect(function(err) {
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
    
        console.log('Connected as id ' + connection.threadId);
    });
};

const getConnection = () => {
    return connection;
};

const closeConnection = () => {
    connection.end();
};

exports.openConnection = openConnection;
exports.getConnection = getConnection;
exports.closeConnection = closeConnection;