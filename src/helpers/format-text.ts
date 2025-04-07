function makeTitleCase(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

const formatText = {
  makeTitleCase
};

export default formatText;
