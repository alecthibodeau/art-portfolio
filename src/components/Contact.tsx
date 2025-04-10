import React, { useRef, useState } from 'react';

/* Constants */
import stringValues from '../constants/stringValues';

/* Helpers */
import apiSendMessage from '../helpers/api-send-message';
import formatDate from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/contact.scss';

function Contact(props: { onClickSubmit: () => void} ): JSX.Element {
  const {
    textEmail,
    textMessage,
    textName,
    textPhone,
    textTime,
    textText,
    errorMessages: {
      allRequiredFields,
      formReferenceNull,
      invalidEmail,
      tryAgain
    }
  } = stringValues
  const { allNonDigits, validEmail, formatLettersAndNumbers, formatTitleCase } = formatText;
  const contactForm: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
  const currentDate: Date = new Date();
  const formattedTime: string = formatDate.formatFullDateAndTime(currentDate);
  const [errors, setErrors] = useState<string[]>([]);
  const [currentField, setCurrentField] = useState<string>('');
  const [isValidationDisplayed, setIsValidationDisplayed] = useState<boolean>(false);
  const [formattedPhone, setFormattedPhone] = useState('');

  function appendFormData(formData: FormData): FormData {
    formData.append('service_id', stringValues.emailServiceId);
    formData.append('template_id', stringValues.emailTemplateId);
    formData.append('user_id', stringValues.emailPublicKey);
    return formData;
  }

  function isUserSubmissionIncomplete(): boolean {
    let isIncomplete: boolean = false;
    if (contactForm.current) {
      const formData = new FormData(contactForm.current);
      const requiredFields = [textName, textEmail, textMessage];
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
    if (currentField === textEmail) {
      !validEmail.test(input) ? addError(invalidEmail) : removeError(invalidEmail);
    }
    if (currentField === textPhone) formatPhone(input);
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
      try {
        await apiSendMessage.postForm(formData);
        props.onClickSubmit();
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
          {fieldName !== textPhone ? <span className="required">*</span> : null}
        </label>
        {
          fieldName !== textMessage ?
          <input
            required={fieldName !== textPhone}
            type={fieldName === textEmail ? textEmail : textText}
            id={fieldName}
            name={fieldName}
            className="input-field"
            onChange={validateInput}
            onFocus={() => setCurrentField(fieldName)}
            {...(fieldName === textPhone ? { value: formattedPhone } : {})}
          /> :
          <textarea
            required
            id={textMessage}
            name={textMessage}
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
        <input type="hidden" name={textTime} value={formattedTime} />
        {stringValues.inputFieldNames.map(renderInputGroup)}
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

export default Contact;
