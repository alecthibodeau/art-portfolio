const emailServiceId: string = 'service_motlos2';
const emailTemplateId: string = 'template_twmeleg';
const emailPublicKey: string = 'rv9Ct6p5U0kLM8po5';
const inputFieldNames: string[] = ['name', 'email', 'phone', 'message'];
const urlSendForm: string = 'https://api.emailjs.com/api/v1.0/email/send-form';
const textEmail: string = 'email';
const textPhone: string = 'phone';
const textMessage: string = 'message';
const textText: string = 'text';

const errorMessages: { [key: string]: string } = {
  invalidEmail: 'Invalid email address.',
  formReferenceNull: 'Form reference is null.',
  errorTryAgain: 'There was an error. Please try again.'

}

const stringValues = {
  emailServiceId,
  emailTemplateId,
  emailPublicKey,
  errorMessages,
  inputFieldNames,
  textEmail,
  textPhone,
  textMessage,
  textText,
  urlSendForm
};

export default stringValues;
