import React, { useRef, useState } from 'react';

/* Constants */
import stringValues from '../constants/stringValues';

/* Helpers */
import apiSendMessage from '../helpers/api-send-message';
import formatDate from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/contact.scss';

function Contact(): JSX.Element {
  const contactForm: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
  const currentDate: Date = new Date();
  const formattedTime: string = formatDate.formatFullDateAndTime(currentDate);
  const [errors, setErrors] = useState<string[]>([]);
  const [currentField, setCurrentField] = useState<string>('');
  const [isValidationDisplayed, setIsValidationDisplayed] = useState<boolean>(false);

  function appendFormData(formData: FormData): FormData {
    formData.append('service_id', stringValues.emailServiceId);
    formData.append('template_id', stringValues.emailTemplateId);
    formData.append('user_id', stringValues.emailPublicKey);
    return formData;
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

  function validateInput(event: React.ChangeEvent<HTMLInputElement>): void {
    const input: string = event.target.value;
    const requiredError: string = `${formatText.makeTitleCase(currentField)} is required.`;
    const invalidEmail: string = 'Invalid email address.';
    const invalidPhone: string = 'Phone must contain only numbers.';

    const onlyDigits: RegExp = /^\d+$/;
    const validEmail: RegExp = /^\S+@\S+\.\S+$/;

    !input.trim() ? addError(requiredError) : removeError(requiredError);
    if (currentField === 'email') {
      !validEmail.test(input) ? addError(invalidEmail) : removeError(invalidEmail);
    }
    if (currentField === 'phone') {
      !onlyDigits.test(input) ? addError(invalidPhone) : removeError(invalidPhone);
    }
  }

  async function sendUserMessage(formData: FormData): Promise<void> {
    if (contactForm.current) {
      appendFormData(formData);
      try {
        await apiSendMessage.postForm(formData);
        contactForm.current.reset();
      } catch (error) {
        console.error('Error sending message:', error);
      }
    } else {
      console.error('Form reference is null.');
      alert('There was an error. Please try again.');
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    if (!errors.length) {
      sendUserMessage(formData);
      if (isValidationDisplayed) setIsValidationDisplayed(false);
    } else {
      setIsValidationDisplayed(true);
    }
  }

  function onClickSubmitButton(): void {
    if (errors.length) setIsValidationDisplayed(true);
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
            onChange={validateInput}
            onFocus={() => setCurrentField(fieldName)}
          /> :
          <textarea required id="message" name="message" className="textarea-field" />
        }
      </div>
    );
  }

  function renderValidationErrorMessage(message: string, index: number): JSX.Element {
    return (
      <span
        key={`${index}${formatText.formatLettersAndNumbers(message)}`}
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
        <span>(asterisk indicates required form field)</span>
      </div>
      <form ref={contactForm} onSubmit={handleSubmit}>
        <input type="hidden" name="time" value={formattedTime} />
        {stringValues.inputFieldNames.map(renderInputGroup)}
        {
          isValidationDisplayed ?
          <div className="error-messages">
            {errors.map(renderValidationErrorMessage)}
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

export default Contact;
