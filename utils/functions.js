const validateFields = (body) => {
  const requiredFields = ['title', 'status'];
  const receivedFields = Object.keys(body); // array with only keys
  const areValidFields = receivedFields.every((field) => {
    return requiredFields.includes(field);
  });
  console.log('areValidFields', areValidFields);

  return areValidFields;
};

module.exports = {
  validateFields
};
