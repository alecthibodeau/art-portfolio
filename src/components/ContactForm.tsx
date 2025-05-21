import React, { useRef, useState } from 'react';

/* Interfaces */
import ContactFormProps from '../interfaces/ContactFormProps';

/* Constants */
import contactFormConfig from '../constants/contact-form-config';

/* Helpers */
import apiSendMessage from '../helpers/api-send-message';
import formatDate from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/contact.scss';

function ContactForm(props: ContactFormProps): JSX.Element {
  const {
    inputs: { name, email, phone, message },
    formatting: { text, time },
    errorMessages: {
      allRequiredFields,
      formReferenceNull,
      invalidEmail,
      tryAgain
    },
    submission: { emailServiceId, emailTemplateId, emailPublicKey }
  } = contactFormConfig;
  const { allNonDigits, validEmail, formatLettersAndNumbers, formatTitleCase } = formatText;
  const contactForm: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
  const currentDate: Date = new Date();
  const formattedTime: string = formatDate.formatFullDateAndTime(currentDate);
  const [errors, setErrors] = useState<string[]>([]);
  const [currentField, setCurrentField] = useState<string>('');
  const [isValidationDisplayed, setIsValidationDisplayed] = useState<boolean>(false);
  const [formattedPhone, setFormattedPhone] = useState('');

  const inputFieldNames: string[] = [name, email, phone, message];

  function appendFormData(formData: FormData): FormData {
    formData.append('service_id', emailServiceId);
    formData.append('template_id', emailTemplateId);
    formData.append('user_id', emailPublicKey);
    return formData;
  }

  function isUserSubmissionIncomplete(): boolean {
    let isIncomplete: boolean = false;
    if (contactForm.current) {
      const formData = new FormData(contactForm.current);
      const requiredFields = [name, email, message];
      isIncomplete = requiredFields.some((field) => !formData.get(field));
    }
    return isIncomplete;
  }

  function addError(errorMessage: string): void {
    setErrors((prevErrors) => {
      if (!prevErrors.includes(errorMessage)) return [...prevErrors, errorMessage];
      return prevErrors;
    });
  }

  function removeError(errorMessage: string): void {
    setErrors((prevErrors) => prevErrors.filter((error) => error !== errorMessage));
  }

  function formatPhone(input: string): void {
    const digits: string = input.replace(allNonDigits, '').slice(0, 10);
    const parts: string[] = [];
    if (digits.length > 0) parts.push(digits.slice(0, 3));
    if (digits.length > 3) parts.push(digits.slice(3, 6));
    if (digits.length > 6) parts.push(digits.slice(6));
    setFormattedPhone(parts.join('-'));
  }

  function validateInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >): void {
    const input: string = event.target.value;
    const requiredError: string = `${formatTitleCase(currentField)} is required.`;
    !input.trim() ? addError(requiredError) : removeError(requiredError);
    if (currentField === email) {
      !validEmail.test(input) ? addError(invalidEmail) : removeError(invalidEmail);
    }
    if (currentField === phone) formatPhone(input);
    if (isUserSubmissionIncomplete()) {
      addError(allRequiredFields);
    } else {
      removeError(allRequiredFields);
    }
  }

  async function sendUserMessage(formData: FormData): Promise<void> {
    setFormattedPhone('');
    setErrors([]);
    if (contactForm.current) {
      contactForm.current.reset();
      props.onSubmitForm();
      try {
        await apiSendMessage.postForm(formData);
        props.onSuccessfulSubmission();
      } catch (error) {
        console.error(tryAgain, error);
      }
    } else {
      console.error(formReferenceNull);
      alert(tryAgain);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    if (!errors.length) {
      sendUserMessage(appendFormData(formData));
      if (isValidationDisplayed) setIsValidationDisplayed(false);
    } else {
      setIsValidationDisplayed(true);
    }
  }

  function onClickSubmitButton(): void {
    if (isUserSubmissionIncomplete()) {
      addError(allRequiredFields);
      setIsValidationDisplayed(true);
    } else if (errors.length) {
      setIsValidationDisplayed(true);
    }
  }

  function renderInputGroup(fieldName: string, index: number): JSX.Element {
    const fieldNameTitleCase: string = formatTitleCase(fieldName);
    return (
      <div
        key={`${index}${fieldNameTitleCase}Field`}
        className="input-group"
      >
        <label htmlFor={fieldName}>
          <span>{fieldNameTitleCase}</span>
          {fieldName !== phone ? <span className="required">*</span> : null}
        </label>
        {
          fieldName !== message ?
          <input
            required={fieldName !== phone}
            type={fieldName === email ? email : text}
            id={fieldName}
            name={fieldName}
            className="input-field"
            onChange={validateInput}
            onFocus={() => setCurrentField(fieldName)}
            {...(fieldName === phone ? { value: formattedPhone } : {})}
          /> :
          <textarea
            required
            id={message}
            name={message}
            className="textarea-field"
            onChange={validateInput}
            onFocus={() => setCurrentField(fieldName)}
          />
        }
      </div>
    );
  }

  function renderErrorMessage(message: string, index: number): JSX.Element {
    return (
      <span
        key={`${index}${formatLettersAndNumbers(message)}`}
        className="error-message"
      >
        {message}
      </span>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-message">
        <span className="contact-alec">Contact Alec</span>
        <span>(asterisk indicates required field)</span>
      </div>
      <form ref={contactForm} onSubmit={handleSubmit}>
        <input type="hidden" name={time} value={formattedTime} />
        {inputFieldNames.map(renderInputGroup)}
        {
          isValidationDisplayed ?
          <div className="error-messages">
            {errors.map(renderErrorMessage)}
          </div> :
          null
        }
        <div className="submit-button-container">
          <button type="submit" onClick={onClickSubmitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
