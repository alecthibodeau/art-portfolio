const emailServiceId: string = 'service_motlos2';
const emailTemplateId: string = 'template_twmeleg';
const emailPublicKey: string = 'rv9Ct6p5U0kLM8po5';
const inputFieldNames: string[] = ['name', 'email', 'phone', 'message'];
const urlSendForm: string = 'https://api.emailjs.com/api/v1.0/email/send-form';
const textEmail: string = 'email';
const textMessage: string = 'message';
const textName: string = 'name';
const textPhone: string = 'phone';
const textTime: string = 'time';
const textText: string = 'text';

const errorMessages: { [key: string]: string } = {
  allRequiredFields: 'Please fill out all required fields.',
  formReferenceNull: 'Form reference is null.',
  invalidEmail: 'Invalid email address.',
  tryAgain: 'There was an error. Please try again.'
};

const svgPaths: { [key: string]: string } = {
  closingX: '125.66 76.67 90.42 41.43 125.66 6.19 120.71 1.24 85.47 36.48 50.23 1.24 45.28 6.19 80.52 41.43 45.28 76.66 50.23 81.61 85.47 46.38 120.71 81.62 125.66 76.67'
};

const stringValues = {
  emailServiceId,
  emailTemplateId,
  emailPublicKey,
  inputFieldNames,
  textEmail,
  textMessage,
  textName,
  textPhone,
  textText,
  textTime,
  urlSendForm,
  errorMessages,
  svgPaths
};

export default stringValues;
