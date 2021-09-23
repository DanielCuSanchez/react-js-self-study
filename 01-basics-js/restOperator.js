//Rest on functions
const rest = (a, ...arguments) => {
  console.log(a, "👉", arguments);
};
rest(1, 3, 4);
//Rest on objects
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};


const { a, ...restObj } = obj;
console.log(a, "👉", restObj);
//Rest on arrays
const arr = [1, 2, 3, 4, 5, 6];

const [r1, r2, ...arr1] = arr;
console.log(r1, r2, "👉", arr1);