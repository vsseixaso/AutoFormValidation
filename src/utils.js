const { Type } = require('./constants')

const generateQuery = (schemaName, tableName) => {
    return `SELECT table_schema, table_name, column_name,
            ordinal_position, column_default, is_nullable, 
            data_type, character_maximum_length, numeric_precision, 
            numeric_scale, datetime_precision, column_type, column_comment
        FROM information_schema.columns 
        WHERE (table_schema='${schemaName}' and table_name = '${tableName}')`;
};

const contains = (arr, item) => {
    return arr.includes(item)
};

const getType = item => {
    if (contains(['int', 'decimal'], item)) return Type.NUMBER
    if (contains(['char', 'varchar'], item)) return Type.STRING
    if (contains(['tinyint'], item)) return Type.BOOL
    else return Type.NULL
};

module.exports = { generateQuery, getType };