const { makeDb } = require("../db");
const dbConfig = require("../config/db");
const { metadataColumns } = require("../lib/constants");
const utils = require("../lib/utils");

const getColumnRules = (column) => {
  let columnRules = {};

  Object.keys(metadataColumns).forEach((key) => {
    const metadata = metadataColumns[key];
    const convert = metadata.convert;
    const columnName = column[metadata.name];

    columnRules[key] = convert(columnName);
  });

  return columnRules;
};

const formatTableMetadata = (tableMetadata) => {
  let rules = {};

  tableMetadata.forEach((column) => {
    rules[column["COLUMN_NAME"]] = getColumnRules(column);
  });

  return rules;
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

const getRules = async (tableName) => {
  const schemaName = dbConfig.database;
  const tableMetadata = await getTableMetadata(schemaName, tableName);
  const rules = formatTableMetadata(tableMetadata);

  return rules;
};

module.exports = { getRules };
