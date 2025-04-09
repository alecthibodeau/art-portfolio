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
}

const stringValues = {
  emailServiceId,
  emailTemplateId,
  emailPublicKey,
  errorMessages,
  inputFieldNames,
  textEmail,
  textMessage,
  textName,
  textPhone,
  textText,
  textTime,
  urlSendForm
};

export default stringValues;
