const longText = "World Wide Web";

const abbrevatedText = longText
  .split(" ")
  .map((word) => word[0])
  .join("");
console.log(abbrevatedText);
