const inputs: { [key: string]: string } = {
  name: 'name',
  email: 'email',
  confirmEmail: 'confirmEmail',
  phone: 'phone',
  message: 'message'
};

const textFormatting: { [key: string]: string } = {
  noPhoneNumberSubmitted: '(no phone number submitted)',
  text: 'text',
  time: 'time'
};

const errorMessages: { [key: string]: string } = {
  allRequiredFields: 'Please fill out all required fields.',
  formReferenceNull: 'Form reference is null.',
  invalidEmail: 'Invalid email address.',
  invalidConfirmEmail: 'Email and Confirm Email do not match.',
  invalidPhone: 'Phone number value must be empty or all ten digits (USA format) — enter non-USA numbers as part of message field.',
  tryAgain: 'There was an error. Please try again.'
};

const submission: { [key: string]: string } = {
  emailServiceId: 'service_a9luvme',
  emailTemplateId: 'template_twmeleg',
  emailPublicKey: 'rv9Ct6p5U0kLM8po5',
  urlSendForm: 'https://api.emailjs.com/api/v1.0/email/send-form'
};

const contactFormConfig = {
  inputs,
  textFormatting,
  errorMessages,
  submission
};

export default contactFormConfig;
