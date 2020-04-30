const { thumbWar } = require("./winners");
const Utils = require("./utils");

test("return winner", () => {
  jest.spyOn(Utils, "getWinner");
  Utils.getWinner.mockImplementation((p1, p2) => p1);
  const winner = thumbWar("Renato Echavarria", "Gustavo Garcia");
  expect(winner).toBe("Renato Echavarria");
  expect(Utils.getWinner).toHaveBeenCalled();
  expect(Utils.getWinner).toHaveBeenCalledTimes(2);
  Utils.getWinner.mockRestore();
});
