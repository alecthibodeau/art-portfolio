const emailServiceId: string = 'service_motlos2';
const emailTemplateId: string = 'template_twmeleg';
const emailPublicKey: string = 'rv9Ct6p5U0kLM8po5';
const inputFieldNames: string[] = ['name', 'email', 'phone', 'message'];
const urlSendForm: string = 'https://api.emailjs.com/api/v1.0/email/send-form';

const stringValues = {
  emailServiceId,
  emailTemplateId,
  emailPublicKey,
  inputFieldNames,
  urlSendForm
};

export default stringValues;
