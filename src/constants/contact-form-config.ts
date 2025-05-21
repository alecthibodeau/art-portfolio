const inputs: { [key: string]: string } = {
  name: 'name',
  email: 'email',
  phone: 'phone',
  message: 'message'
};

const formatting: { [key: string]: string } = {
  text: 'text',
  time: 'time'
};

const errorMessages: { [key: string]: string } = {
  allRequiredFields: 'Please fill out all required fields.',
  formReferenceNull: 'Form reference is null.',
  invalidEmail: 'Invalid email address.',
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
  formatting,
  errorMessages,
  submission
};

export default contactFormConfig;
