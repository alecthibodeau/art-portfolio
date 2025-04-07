import React, { useRef } from 'react';

/* Constants */
import stringValues from '../constants/stringValues';

/* Helpers */
import formatDate from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/contact.scss';

function Contact(): JSX.Element {
  const contactForm: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
  const currentDate: Date = new Date();
  const formattedTime: string = formatDate.formatFullDateAndTime(currentDate);

  async function sendFormFromUser(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('service_id', stringValues.emailServiceId);
    formData.append('template_id', stringValues.emailTemplateId);
    formData.append('user_id', stringValues.emailPublicKey);
    if (contactForm.current) {
      try {
        const response: Response = await fetch(stringValues.urlSendForm, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }
        console.log('SUCCESS! Form submitted successfully.', response.status);
        contactForm.current.reset();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Form reference is null.');
    }
  }

  function renderInputGroup(fieldName: string, index: number): JSX.Element {
    const fieldNameTitleCase: string = formatText.makeTitleCase(fieldName);
    return (
      <div
        key={`${index}${fieldNameTitleCase}Field`}
        className="input-group"
      >
        <label htmlFor={fieldName}>
          <span>{fieldNameTitleCase}</span>
          {fieldName !== 'phone' ? <span className="required">*</span> : null}
        </label>
        {
          fieldName !== 'message' ?
          <input
            required={fieldName !== 'phone'}
            type={fieldName === 'email' ? 'email' : 'text'}
            id={fieldName}
            name={fieldName}
            className="input-field"
          /> :
          <textarea required id="message" name="message" className="textarea-field" />
        }
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-message">
        <span className="contact-alec">Contact Alec</span>
        <span>(asterisk indicates required form field)</span>
      </div>
      <form ref={contactForm} onSubmit={sendFormFromUser}>
        <input type="hidden" name="time" value={formattedTime} />
        {stringValues.inputFieldNames.map(renderInputGroup)}
        <div className="submit-button-container">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
