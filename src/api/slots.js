import { randomCardId } from "./randomCard";

export let slots = {
  slotBottom: {
    slotBottom1: {
      id: "slotBottom1",
      cardId: randomCardId,
    },
  },
  slotOrderTop: [
    "slotTop1",
    "slotTop2",
    "slotTop3",
    "slotTop4",
    "slotTop5",
    "slotTop6",
    "slotTop7",
    "slotTop8",
    "slotTop9",
    "slotTop10",
    "slotTop11",
    "slotTop12",
  ],
  slotOrderBottom: ["slotBottom1"],
};

// let cardId = slots.slotBottom.slotBottom1.cardId;

// while (cardId.length < 8) {
//   const r = Math.floor(Math.random() * 100) + 1;
//   if (!cardId.includes(r.toString())) {
//     cardId.push(r.toString());
//   }
// }

for (let i = 1; i < 13; i++) {
  let slotTopName = "slotTop" + i;
  const slotTop = {
    [slotTopName]: {
      id: slotTopName,
      cardId: [],
    },
  };

  slots = { ...slots, ...slotTop };
}
