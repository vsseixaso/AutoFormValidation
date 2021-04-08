const utils = require("./utils");

const dataType = {
  NUMBER: ["int", "decimal"],
  STRING: ["char", "varchar"],
  BOOL: ["tinyint"],
};

const metadataColumns = {
  defaultValue: { name: "COLUMN_DEFAULT", convert: (v) => v },
  mandatory: {
    name: "IS_NULLABLE",
    convert: (v) => (v == "YES" ? false : true),
  },
  type: { name: "DATA_TYPE", convert: (v) => utils.getType(v, dataType) },
  maxLength: { name: "CHARACTER_MAXIMUM_LENGTH", convert: (v) => v },
  precision: { name: "NUMERIC_PRECISION", convert: (v) => v },
  scale: { name: "NUMERIC_SCALE", convert: (v) => v },
  datetime: { name: "DATETIME_PRECISION", convert: (v) => v },
  columnType: { name: "COLUMN_TYPE", convert: (v) => v },
  description: { name: "COLUMN_COMMENT", convert: (v) => v },
};

module.exports = { dataType, metadataColumns };
