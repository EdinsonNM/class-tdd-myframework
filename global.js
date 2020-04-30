function expect(actual) {
	return {
		toBe: (expected) => {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`);
			}
		},
		toEqual: (ecxpected) => {},
	};
}

async function test(title, callback) {
	try {
		await callback();
		console.log(`✅ ${title}`);
	} catch (error) {
		console.log(`❌ ${title}`);
		console.log(error);
	}
}

global.expect = expect;
global.test = test;
