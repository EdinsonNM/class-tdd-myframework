const { sum, substract, sumAsync } = require("./math.js");

test("test sum 7+3", () => {
	expect(sum(3, 7)).toBe(10);
});
test("test substract 7-3", () => {
	expect(substract(7, 3)).toBe(4);
});
test("sumAsync should return 10 when params is 7,3", async () => {
	const result = await sumAsync(7, 3);
	expect(result).toBe(10);
});
