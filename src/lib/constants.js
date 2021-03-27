const metadataColumns = {
    defaultValue: 'COLUMN_DEFAULT',
    mandatory: 'IS_NULLABLE',
    type: 'DATA_TYPE',
    maxLength: 'CHARACTER_MAXIMUM_LENGTH',
    precision: 'NUMERIC_PRECISION',
    scale: 'NUMERIC_SCALE',
    datetime: 'DATETIME_PRECISION',
    columnType: 'COLUMN_TYPE',
    descrition: 'COLUMN_COMMENT'
};

const dataType = {
    NUMBER: ['int', 'decimal'],
    STRING: ['char', 'varchar'],
    BOOL: ['tinyint']
};

module.exports = { metadataColumns, dataType };