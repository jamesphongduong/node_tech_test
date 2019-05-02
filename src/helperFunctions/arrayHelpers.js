// flatten array
export const flattenArray = array => {
  return [].concat.apply([], array);
};

// delete element from array
export const deleteElement = (array, elementValue) => {
  array.forEach((e, i) => {
    if (e === elementValue) {
      return array.splice(i, 1);
    }
  });
};

// remove duplicates from array
export const removeArrayDuplicates = array => {
  return array.filter((v, i, a) => a.indexOf(v) === i);
};
