const { thumbWar } = require("./winners");
const Utils = require("./utils");

function fn(impl) {
  const mockFn = (...args) => {
    return impl(...args);
  };
  return mockFn;
}
test("return winner", () => {
  const originalGetWinner = Utils.getWinner;
  Utils.getWinner = jest.fn((p1, p2) => p1);
  const winner = thumbWar("Renato Echavarria", "Gustavo Garcia");
  expect(winner).toBe("Renato Echavarria");
  expect(Utils.getWinner).toHaveBeenCalled();
});
