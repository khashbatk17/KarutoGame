import { slots } from "./slots";
// import { heh } from "../pages/battlefield/gameStart";

export const randomNumber = [0];
// slots.slotBottom.slotBottom1.cardId.length + 1
while (randomNumber.length < 3) {
  const r = Math.floor(Math.random() * 100) + 1;

  if (
    !randomNumber.includes(r) &&
    slots.slotBottom.slotBottom1.cardId.includes(r.toString())
  ) {
    randomNumber.push(r);
  }
}
