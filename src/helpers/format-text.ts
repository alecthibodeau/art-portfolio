const allButLettersAndNumbers: RegExp = /[^a-zA-Z0-9]/g;
const allButLettersNumbersAndSpaces: RegExp = /[^a-zA-Z0-9\s]/g;
const allCapitalLetters: RegExp = /([A-Z])/g;
const allSpaces: RegExp = /\s+/g;
const allNonDigits: RegExp = /\D/g;
const validEmail: RegExp = /^\S+@\S+\.\S+$/;

function formatLettersAndNumbers(text: string): string {
  return text.replace(allButLettersAndNumbers, '');
}

function addSpaceBeforeCapitalLetters(text: string): string {
  return text.replace(allCapitalLetters, ' $1').trim();
}

function formatDashCase(text: string): string {
  return text.toLowerCase().replace(allButLettersNumbersAndSpaces, '').replace(allSpaces, '-');
}

function formatTitleCase(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

function formatFormLabel(text: string): string {
  return formatTitleCase(addSpaceBeforeCapitalLetters(text));
}

const formatText = {
  allNonDigits,
  validEmail,
  formatDashCase,
  formatFormLabel,
  formatLettersAndNumbers,
  formatTitleCase
};

export default formatText;
