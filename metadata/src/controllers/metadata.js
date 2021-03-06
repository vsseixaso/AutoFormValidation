const { makeDb } = require('../db');
const dbConfig = require('../config/dbCredentials');
const { metadataColumns } = require('../lib/constants');
const utils = require('../lib/utils');

const formatColumnMetadata = (column) => {
  let columnMetadata = {};

  Object.keys(metadataColumns).forEach((key) => {
    const metadata = metadataColumns[key];
    const convert = metadata.convert;
    const columnName = column[metadata.name];

    columnMetadata[key] = convert(columnName);
  });

  return columnMetadata;
};

const formatMetadata = (tableMetadata) => {
  let metadata = {};

  tableMetadata.forEach((column) => {
    metadata[column['COLUMN_NAME']] = formatColumnMetadata(column);
  });

  return metadata;
};

const getTableMetadata = async (schemaName, tableName) => {
  const db = makeDb(dbConfig);

  try {
    const query = utils.generateQuery(schemaName, tableName);
    const tableMetadata = await db.query(query);

    return tableMetadata;
  } catch (err) {
    console.error(err);
  } finally {
    await db.close();
  }
};

const getMetadata = async (tableName) => {
  const schemaName = dbConfig.database;
  const tableMetadata = await getTableMetadata(schemaName, tableName);
  const metadata = formatMetadata(tableMetadata);

  return metadata;
};

module.exports = { getMetadata };
