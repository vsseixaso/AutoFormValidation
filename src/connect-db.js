var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'tcc',
    user     : 'root',
    password : 'Cr0w$p1ke',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

const query =
        `SELECT table_schema, table_name, column_name, ordinal_position, 
            data_type, numeric_precision, column_type, column_default, 
            is_nullable, column_comment 
        FROM information_schema.columns 
        WHERE (table_schema='tcc' and table_name = 'persons');`;

connection.query(query, function (error, result, fields) {
    if (error)
        throw error;

    console.log(result);
});

connection.end();