export const randomCardId = [];

while (randomCardId.length < 8) {
  const r = Math.floor(Math.random() * 100) + 1;
  if (!randomCardId.includes(r.toString())) {
    randomCardId.push(r.toString());
  }
}
