

const toArray = (value) => {
  return typeof value === 'string' ? [value] : value;
};

console.log(toArray('ciao'))