/**
 * Validates a field. Returns a list containing every object that has failed validation and its respective errors.
 * If the returned list is empty, then the field has no validation errors.
 *
 * @param {*} rule - Validation rule. In other words, what we expect about this field.
 * @param {*} fieldValue - The value of the field.
 * @returns Array<String> - ["error message 1", "error message 2", ...]
 */
const validateField = (rule, fieldValue) => {
  const errors = [];

  const validationFnsByType = {
    ALL: [isFieldEmpty],
    STRING: [isLengthExceeded],
    NUMBER: [checkUnsigned, checkPrecision, checkScale],
    BOOL: [],
    DATE: [],
  };

  const validationFns = validationFnsByType['ALL'].concat(
    validationFnsByType[rule.type]
  );

  validationFns.forEach((fn) => {
    const validationResult = fn(rule, fieldValue);
    if (validationResult.hasError) {
      errors.push(validationResult.message);
    }
  });

  return errors;
};

const isFieldEmpty = (rule, fieldValue) => {
  const hasError = rule.mandatory && !fieldValue;
  const message = `Field is mandatory`;

  return { hasError, message };
};

const isLengthExceeded = (rule, fieldValue) => {
  const currentLenght = fieldValue.length;

  const hasError = currentLenght > rule.maxLength;
  const message = `Field length exceeded. Max length is ${rule.maxLength}, you typed ${currentLenght} characters`;

  return { hasError, message };
};

const checkUnsigned = (rule, fieldValue) => {
  const columnType = rule.columnType.split(' ');
  const isUnsigned = columnType[1] && columnType[1] === 'unsigned';

  const hasError = isUnsigned && fieldValue < 0;
  const message = `Field does not allow values less than zero`;

  return { hasError, message };
};

const getType = (columnType) => {
  return columnType.split(' ')[0];
};

const checkIntPrecision = (rule, fieldValue) => {
  const strValue = fieldValue.toString();
  const valueLength = strValue.length;
  const maxLength = rule.precision;

  const hasError = valueLength > maxLength;
  const message = `The maximum value for the field is ${'9'.repeat(maxLength)}`;

  return { hasError, message };
};

const checkDecimalPrecision = (rule, fieldValue) => {
  const strValue = fieldValue.toString();
  const valuePrecision = strValue.split('.')[0];
  const valueLength = valuePrecision.length;
  const maxLength = rule.precision - rule.scale;

  const hasError = valueLength > maxLength;
  const message = `The maximum value for the field is ${'9'.repeat(
    maxLength
  )}.${'9'.repeat(rule.scale)}`;

  return { hasError, message };
};

const checkPrecision = (rule, fieldValue) => {
  const type = getType(rule.columnType);

  if (type === 'int') {
    return checkIntPrecision(rule, fieldValue);
  } else if (type.substring(0, 7) === 'decimal') {
    return checkDecimalPrecision(rule, fieldValue);
  }

  return { hasError: false, message: '' };
};

const checkIntScale = (rule, fieldValue) => {
  const strValue = fieldValue.toString();
  const valueScale = strValue.split('.')[1];

  const hasError = valueScale;
  const message = `The field does not allow decimal values`;

  return { hasError, message };
};

const checkDecimalScale = (rule, fieldValue) => {
  const strValue = fieldValue.toString();
  const valueScale = strValue.split('.')[1];
  const scaleLength = valueScale ? valueScale.length : 0;
  const scaleMax = rule.scale;

  const hasError = scaleLength > scaleMax;
  const message = `Maximum number of decimal places is ${scaleMax}`;

  return { hasError, message };
};

const checkScale = (rule, fieldValue) => {
  const type = getType(rule.columnType);

  if (type === 'int') {
    return checkIntScale(rule, fieldValue);
  } else if (type.substring(0, 7) === 'decimal') {
    return checkDecimalScale(rule, fieldValue);
  }

  return { hasError: false, message: '' };
};

export default validateField;
