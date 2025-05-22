const fieldRequiredMessage = 'This field is required';

const firstNameValidation = {
  required: fieldRequiredMessage
};

const lastNameValidation = {
  required: fieldRequiredMessage
};

const emailValidation = {
  required: fieldRequiredMessage,
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email address'
  }
};

const messageValidation = {
  required: fieldRequiredMessage
};

const contactedValidation = {
  required: 'To submit this form, please consent to being contacted'
};

export const FORM_VALIDATION = {
  NAME: firstNameValidation,
  LASTNAME: lastNameValidation,
  EMAIL: emailValidation,
  MESSAGE: messageValidation,
  CONTACTED: contactedValidation
};
