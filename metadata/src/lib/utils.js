const generateQuery = (schemaName, tableName) => {
  return `SELECT table_schema, table_name, column_name,
            ordinal_position, column_default, is_nullable, 
            data_type, character_maximum_length, numeric_precision, 
            numeric_scale, datetime_precision, column_type, column_comment
        FROM information_schema.columns 
        WHERE (table_schema='${schemaName}' and table_name = '${tableName}')`;
};

const getType = (dbType, types) => {
  return Object.keys(types).find((key) => types[key].includes(dbType));
};

module.exports = { generateQuery, getType };
