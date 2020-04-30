const { thumbWar } = require("./winners");
const Utils = require("./utils");

Utils.getWinner = (player1, player2) => player1;
test("return winner", () => {
  const winner = thumbWar("Renato Echavarria", "Gustavo Garcia");
  expect(winner).toBe("Renato Echavarria");
});
