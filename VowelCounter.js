function getVowelCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  console.log(getVowelCount("souvik sen"))
//   It will return 4