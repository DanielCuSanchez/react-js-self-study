//Arrays
const sum = (a, b, c) => console.log(a + b + c);

const arr = [10, 20, 30];

sum(...arr);

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2, 7, 8, 9];
console.log(arr3);

//Objects

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  a: 1.1,
  c: 3,
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
