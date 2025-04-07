import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

/* Helpers */
import formatDate from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/contact.scss';

function Contact(): JSX.Element {
  const form: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
  const currentDate: Date = new Date();
  const emailServiceId: string = 'service_motlos2';
  const emailTemplateId: string = 'template_twmeleg';
  const emailPublicKey: string = 'rv9Ct6p5U0kLM8po5';
  const formattedTime: string = formatDate.formatFullDateAndTime(currentDate);
  const inputFieldNames: string[] = ['name', 'email', 'phone', 'message'];

  async function sendFormFromUser(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (form.current) {
      try {
        await emailjs.sendForm(
          emailServiceId,
          emailTemplateId,
          form.current,
          { publicKey: emailPublicKey }
        );
        console.log('SUCCESS! Form submitted successfully.');
        form.current.reset();
      } catch (error) {
        console.log('FAILED...', error as string);
        throw new Error(error as string);
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
      <form ref={form} onSubmit={sendFormFromUser}>
        <input type="hidden" name="time" value={formattedTime} />
        {inputFieldNames.map(renderInputGroup)}
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
