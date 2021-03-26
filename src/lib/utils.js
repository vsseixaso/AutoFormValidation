const { DataType } = require('./constants');

const generateQuery = (schemaName, tableName) => {
    return `SELECT table_schema, table_name, column_name,
            ordinal_position, column_default, is_nullable, 
            data_type, character_maximum_length, numeric_precision, 
            numeric_scale, datetime_precision, column_type, column_comment
        FROM information_schema.columns 
        WHERE (table_schema='${schemaName}' and table_name = '${tableName}')`;
};

const contains = (arr, item) => {
    return arr.includes(item);
};

const getType = item => {
    let dataType = '';

    if (contains(['int', 'decimal'], item)) {
        dataType = DataType.NUMBER;
    } else if (contains(['char', 'varchar'], item)) {
        dataType = DataType.STRING;
    } else if (contains(['tinyint'], item)) {
        dataType = DataType.BOOL;
    } else {
        dataType = DataType.NULL;
    }

    return dataType;
};

module.exports = { generateQuery, getType };