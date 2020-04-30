const sum = (a, b) => a + b;
const substract = (a, b) => a - b;

const sumAsync = (a, b) => Promise.resolve(sum(a, b));
const substractAsync = (a, b) => Promise.resolve(substract(a, b));
module.exports = {
	sum,
	substract,
	sumAsync,
	substractAsync,
};
