// Strong password with regex

// Conditions
// - Combination of numbers
// - Uppercase and lowercase characters
// - Symbols
// - Minimum number of characters – 6 or 8.

const regExp = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const password = "Shubhamdutta534@"

const check3 = regExp.test(password) // returns true