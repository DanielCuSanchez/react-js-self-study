const users = [
	{
		id: 1,
		name: 'Daniel',
	},
	{
		id: 2,
		name: 'Jan',
	},
	{
		id: 3,
		name: 'Pedro',
	},
	{
		id: 4,
		name: 'Elena',
	},
];

console.log(users.map((u) => u));

const numbers = [1, -4, 42, 2, 222];

//case 1 reduce
const r1 = numbers.reduce((acc, el) => acc + el);
console.log(r1);
//Case 2 reduce
const getMax = (a, b) => Math.max(a, b);
const r2 = numbers.reduce(getMax);
console.log(r2);

//Case 3 reduce
const r3 = numbers.reduce((acc, el) => `${acc}, ${el}`);

console.log(r3);
