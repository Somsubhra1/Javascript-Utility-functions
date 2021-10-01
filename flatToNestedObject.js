const flatToNestedObject = (obj) => {
  let nestedObj = {};
  for (let key in obj) {
    const value = obj[key];
    if (key.indexOf(".") >= 0) {
      const nestedKeys = key.split(".");
      const parent = nestedKeys.shift();
      const child = nestedKeys.join(".");

      nestedObj[parent] = { ...nestedObj[parent] };
      nestedObj[parent][child] = value;
      nestedObj[parent] = flatToNestedObject(nestedObj[parent]);
    } else {
      if (typeof value === "object") {
        nestedObj[key] = flatToNestedObject(value);
      } else {
        nestedObj[key] = value;
      }
    }
  }

  return nestedObj;
};