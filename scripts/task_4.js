// Задание 4
let cards = [5, 11, 12, 13, 10];
for (let i = 0; i < cards.length; i++) {
  if (cards[i] == 11) cards[i] = "jack";
  else if (cards[i] == 12) cards[i] = "queen";
  else if (cards[i] == 13) cards[i] = "king";
}
console.log("Cards", cards);
