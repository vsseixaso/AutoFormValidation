const db = require('./db');

const queryTableMetadata = (tableSchema, tableName) => {
    const query = 
        `SELECT table_schema, table_name, column_name,
            ordinal_position, column_default, is_nullable, 
            data_type, character_maximum_length, numeric_precision, 
            numeric_scale, datetime_precision, column_type, column_comment
        FROM information_schema.columns 
        WHERE (table_schema='${tableSchema}' and table_name = '${tableName}')`;

    const connection = db.getConnection();

    const tableMetadata = (callback) => {
        connection.query(query, (error, results, fields) => {
            if (error) throw error;

            callback(results);
        });
    };

    return tableMetadata;
};

const render = md => {
    console.log('md: ', md);
};

const getTableMetadata = () => {
    db.openConnection();

    let queryResponse = queryTableMetadata('tcc', 'persons');
    
    return queryResponse(results => {
        console.log('tableMetadata1: ', results[0]);
        render(results);
        return results;
    })
};

const tableMetadata = getTableMetadata();

console.log('tableMetadata2: ', tableMetadata);

db.closeConnection();
