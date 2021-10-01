const spaceSplit = (str, limit = 30, maxSize = 6) => {
  let spaceSplitNchars = [];

  str.split(" ").forEach((word, i) => {
    if (i === 0) {
      spaceSplitNchars.push(word);
    } else {
      const lastItem = spaceSplitNchars.pop();
      if (lastItem.length + word.length <= limit) {
        spaceSplitNchars.push(lastItem + " " + word);
      } else {
        spaceSplitNchars.push(lastItem);
        spaceSplitNchars.push(word);
      }
    }
  });

  while (spaceSplitNchars.length < maxSize) {
    spaceSplitNchars.push("");
  }

  return spaceSplitNchars;
};

const address = "Colby Bernard Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 (302) 259-2375";
const limit = 30;
const maxSize = 6;

console.log(spaceSplit(address));
