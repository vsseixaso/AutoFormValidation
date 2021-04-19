/**
 * Validates a field. Returns a list containing every object that has failed validation and its respective errors.
 * If the returned list is empty, then the field has no validation errors.
 *
 * @param {*} rule - Validation rule. In other words, what we expect about this field.
 * @param {*} fieldValue - The value of the field.
 * @returns Array - ["error message 1", "error message 2", ...]
 */
const validateField = (rule, fieldValue) => {
  const validationFnsByType = {
    ALL: [isFieldEmpty],
    STRING: [isLengthExceeded],
    NUMBER: [checkColumnType],
    BOOL: [],
    DATE: [],
  };

  const errors = [];

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
  const message = `Field is mandatory.`;

  return { hasError, message };
};

const isLengthExceeded = (rule, fieldValue) => {
  const currentLenght = fieldValue.length;
  const hasError = currentLenght > rule.maxLength;
  const message = `Field length exceeded. Max length is ${rule.maxLength}, you typed ${currentLenght} characters.`;
  return { hasError, message };
};

const checkColumnType = (rule, fieldValue) => {
  return { hasError: false, message: '' };
};

export default validateField;
