const config = require('./db-config');
const { makeDb } = require('./db');
const utils = require('./utils');

const getTableMetadata = async (schemaName, tableName) => {
    const db = makeDb(config);

    try {
        const query = utils.generateQuery(schemaName, tableName);
        const tableMetadata = await db.query(query);

        return tableMetadata;
    } catch ( err ) {
        console.error(err);
    } finally {
        await db.close();
    }
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
                    return utils.getType(column[metadata]);

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
                    return column[metadata];
            }
        };
    
        return {
            defaultValue: convert('COLUMN_DEFAULT'),
            mandatory: convert('IS_NULLABLE'),
            type: convert('DATA_TYPE'),
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
    
const main = async () => {
    const tableMetadata = await getTableMetadata('tcc', 'persons');
    const rules = formatTableMetadata(tableMetadata);
    console.log(rules);
};

main();