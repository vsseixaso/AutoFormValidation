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
    
const main = async () => {
    const tableMetadata = await getTableMetadata('tcc', 'persons');
    const rules = utils.formatTableMetadata(tableMetadata);
    console.log(rules);
};

main();