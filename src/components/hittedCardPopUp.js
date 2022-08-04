import React from "react";
import { images } from "../api/images";
import { cards } from "../api/cards";

const HittedCardPopUp = (props) => {
  return (
    <div className="yoroshiku2 + Shadow2" onClick={() => props.toggleResult()}>
      <span>Correct card in your territory</span>
      <figure>
        <img src={images[props.slot.cardId - 1]} alt={props.slot.cardId} />
        <span className="Syllable">{cards[props.slot.cardId].syllable}</span>
      </figure>
      <div className="status">
        <div className="time">+{props.second / 1000} sec</div>
      </div>
    </div>
  );
};

export default HittedCardPopUp;
