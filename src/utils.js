const generateQuery = (schemaName, tableName) => {
    return `SELECT table_schema, table_name, column_name,
            ordinal_position, column_default, is_nullable, 
            data_type, character_maximum_length, numeric_precision, 
            numeric_scale, datetime_precision, column_type, column_comment
        FROM information_schema.columns 
        WHERE (table_schema='${schemaName}' and table_name = '${tableName}')`;
};

const formatTableMetadata = tableMetadata => {

    let rules = {};

    const getValues = column => {

        const convert = metadata => {
            switch (metadata) {
                case 'COLUMN_DEFAULT':
                    return column[metadata];
                
                case 'IS_NULLABLE':
                    return column[metadata] == 'YES' ? false : true;
                
                case 'DATA_TYPE':
                    return column[metadata];

                case 'CHARACTER_MAXIMUM_LENGTH':
                    return column[metadata];
                
                case 'NUMERIC_PRECISION':
                    return column[metadata];
                
                case 'NUMERIC_SCALE':
                    return column[metadata];

                case 'DATETIME_PRECISION':
                    return column[metadata];
    
                case 'COLUMN_TYPE':
                    return column[metadata];
        
                case 'COLUMN_COMMENT':
                    return column[metadata];
                   
                default:
                    break;
            }
        };
    
        return {
            defaultValue: convert('COLUMN_DEFAULT'),
            notNull: convert('IS_NULLABLE'),
            dataType: convert('DATA_TYPE'),
            maxLength: convert('CHARACTER_MAXIMUM_LENGTH'),
            precision: convert('NUMERIC_PRECISION'),
            scale: convert('NUMERIC_SCALE'),
            datetime: convert('DATETIME_PRECISION'),
            columnType: convert('COLUMN_TYPE'),
            descrition: convert('COLUMN_COMMENT'),
        };
    };
    
    tableMetadata.forEach(column => {
        rules[column['COLUMN_NAME']] = getValues(column);
    });

    return rules;
};

module.exports = { generateQuery, formatTableMetadata };