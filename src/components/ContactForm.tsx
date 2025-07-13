import React, { useRef, useState } from 'react';

/* Interfaces */
import ContactFormProps from '../interfaces/ContactFormProps';

/* Constants */
import contactFormConfig from '../constants/contact-form-config';

/* Helpers */
import apiSendMessage from '../helpers/api-send-message';
import formatDateAndTime from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/contact-form.scss';

function ContactForm(props: ContactFormProps): JSX.Element {
  const {
    inputs: { name, email, confirmEmail, phone, message },
    textFormatting: { noPhoneNumberSubmitted, text, time },
    errorMessages: {
      allRequiredFields,
      formReferenceNull,
      invalidConfirmEmail,
      invalidEmail,
      invalidPhone,
      tryAgain
    },
    submission: { emailServiceId, emailTemplateId, emailPublicKey }
  } = contactFormConfig;
  const {
    allNonDigits,
    validEmail,
    formatFormLabel,
    replaceAngleBrackets
  } = formatText;
  const contactForm: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [currentField, setCurrentField] = useState<string>('');
  const [isValidationDisplayed, setIsValidationDisplayed] = useState<boolean>(false);
  const [formattedPhone, setFormattedPhone] = useState('');
  const [messageLength, setMessageLength] = useState<number>(0);

  const currentDate: Date = new Date();
  const formattedTime: string = formatDateAndTime.formatFullDateAndTime(currentDate);

  const inputFieldNames: string[] = [name, email, confirmEmail, phone, message];

  const messageMaxLength: number = 1000;
  const remainingCount: number = messageMaxLength - messageLength;
  const isMaxCount: boolean = messageLength === messageMaxLength;

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
    (digits.length && digits.length < 10) ? addError(invalidPhone) : removeError(invalidPhone);
    const parts: string[] = [];
    if (digits.length > 0) parts.push(digits.slice(0, 3));
    if (digits.length > 3) parts.push(digits.slice(3, 6));
    if (digits.length > 6) parts.push(digits.slice(6));
    setFormattedPhone(parts.join('-'));
  }

  function validateConfirmEmail(inputValue: string): void {
    if (contactForm.current) {
      const formData = new FormData(contactForm.current);
      const otherInput = currentField === email ? confirmEmail : email;
      const otherInputValue: string | null = formData.get(otherInput) as string | null;
      if (otherInputValue && otherInputValue !== inputValue) {
        addError(invalidConfirmEmail);
      } else {
        removeError(invalidConfirmEmail);
      }
    }
  }

  function validateInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >): void {
    const input: string = replaceAngleBrackets(event.target.value);
    if (currentField === message) setMessageLength(input.length);
    if (currentField === phone) {
      formatPhone(input);
    } else {
      const requiredError: string = `${formatFormLabel(currentField)} is required.`;
      !input.trim() ? addError(requiredError) : removeError(requiredError);
    }
    if (currentField === email || currentField === confirmEmail) {
      !validEmail.test(input) ? addError(invalidEmail) : removeError(invalidEmail);
      validateConfirmEmail(input);
    }
    if (isUserSubmissionIncomplete()) {
      addError(allRequiredFields);
    } else {
      removeError(allRequiredFields);
    }
  }

  async function sendUserMessage(formData: FormData): Promise<void> {
    setFormattedPhone('');
    setMessageLength(0);
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
      formData.delete(confirmEmail);
      if (!formData.get(phone)) formData.set(phone, noPhoneNumberSubmitted);
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
    return (
      <div
        key={`${index}${fieldName}Field`}
        className="input-group"
      >
        <label htmlFor={fieldName}>
          <span>{formatFormLabel(fieldName)}</span>
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
            maxLength={fieldName === name ? 100: 250}
            onChange={validateInput}
            onFocus={() => setCurrentField(fieldName)}
            {...(fieldName === phone ? { value: formattedPhone } : {})}
          /> :
          <textarea
            required
            id={message}
            name={message}
            className="textarea-field"
            maxLength={messageMaxLength}
            onChange={validateInput}
            onFocus={() => setCurrentField(fieldName)}
          />
        }
      </div>
    );
  }

  function renderCharactersRemainingMessage(): JSX.Element {
    return (
      <div className={`characters-remaining-message${isMaxCount ? ' limit' : ''}`}>
        {`${remainingCount} character${remainingCount === 1 ? '' : 's'} remaining`}
      </div>
    );
  }

  function renderErrorMessagesWrapper(): JSX.Element {
    return (
      <div className="error-messages-wrapper">
        {errors.map(renderErrorMessage)}
      </div>
    );
  }

  function renderErrorMessage(message: string, index: number): JSX.Element {
    return (
      <span key={`${index}${message}`} className="error-message">
        {message}
      </span>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-message">
        <span className="contact-form-title">Contact</span>
        <span>(asterisk indicates required field)</span>
      </div>
      <form ref={contactForm} onSubmit={handleSubmit}>
        <input type="hidden" name={time} value={formattedTime} />
        {inputFieldNames.map(renderInputGroup)}
        {messageLength ? renderCharactersRemainingMessage() : null}
        {isValidationDisplayed ? renderErrorMessagesWrapper() : null}
        <div className="submit-button-wrapper">
          <button type="submit" onClick={onClickSubmitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
