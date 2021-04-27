const { makeDb } = require("../db");
const dbConfig = require("../config/db");
const { metadataColumns } = require("../lib/constants");
const utils = require("../lib/utils");

const getColumnMetadata = (column) => {
  let columnMetadata = {};

  Object.keys(metadataColumns).forEach((key) => {
    const metadata = metadataColumns[key];
    const convert = metadata.convert;
    const columnName = column[metadata.name];

    columnMetadata[key] = convert(columnName);
  });

  return columnMetadata;
};

const formatTableMetadata = (tableMetadata) => {
  let metadata = {};

  tableMetadata.forEach((column) => {
    metadata[column["COLUMN_NAME"]] = getColumnMetadata(column);
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
  const metadata = formatTableMetadata(tableMetadata);

  return metadata;
};

module.exports = { getMetadata };
