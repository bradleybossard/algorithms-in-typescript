const arr:ReadonlyArray<string> = [
  'alpha',
  'gamma',
  'beta'
];

// Raises a compiler error b/c sort mutates array.  Add Readonly prevents that.
// const copy = arr.sort();

// Instead use slice to make a copy of the original array to sort.
const copy = arr.slice().sort();
console.log({arr});
console.log({copy});

