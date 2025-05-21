/* Constants */
import contactFormConfig from '../constants/contact-form-config';

const { urlSendForm } = contactFormConfig.submission;

async function postForm(formData: FormData): Promise<void> {
  try {
    const response: Response = await fetch(urlSendForm, {
      method: 'POST',
      body: formData
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }
    console.log('SUCCESS! Form submitted successfully.', response.status);
  } catch (error) {
    console.error(error);
  }
}

const apiSendMessage = {
  postForm
};

export default apiSendMessage;
