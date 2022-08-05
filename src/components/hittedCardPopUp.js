import React, { useState } from "react";
import { images } from "../api/images";
import { cards } from "../api/cards";

const HittedCardPopUp = (props) => {
  const [secondLoad, setSecondload] = useState(0);
  let x = 0.001;
  const secLoad = () => {
    const load = setTimeout(() => {
      if (parseFloat(secondLoad.toFixed(3)) !== props.second / 1000) {
        setSecondload(
          parseFloat(secondLoad.toFixed(3)) + parseFloat(x.toFixed(3))
        );
      }
    }, 1.5);
    if (parseFloat(secondLoad.toFixed(3)) === props.second / 1000) {
      clearTimeout(load);
    }
    return parseFloat(secondLoad.toFixed(3));
  };
  return (
    <div className="yoroshiku2 + Shadow2" onClick={() => props.toggleResult()}>
      <span>Correct card in your territory</span>
      <figure className="rotating">
        <img src={images[props.slot.cardId - 1]} alt={props.slot.cardId} />
        <span className="Syllable">
          {cards[props.slot.cardId - 1].syllable}
        </span>
      </figure>
      <div className="status">
        {/* <div className="time">+{props.second / 1000} sec</div> */}
        <div
          className="time"
          style={
            parseFloat(secondLoad.toFixed(3)) === props.second / 1000
              ? {
                  animation: "secondEffect 0.2s linear",
                }
              : { animation: "" }
          }
        >
          +{secLoad()} sec
        </div>
      </div>
    </div>
  );
};

export default HittedCardPopUp;
