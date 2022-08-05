import React from "react";

const GameOver = (props) => {
  const getCardNum = (result) => {
    let sum = 0;
    for (let i = 0; i < props.hittedCard.length; i++) {
      if (props.hittedCard[i] === result) {
        sum++;
      }
    }
    return sum;
  };

  const getAverageDuration = () => {
    console.log(props.storedSecond);
    let sum = 0.0;
    let average = 0;
    for (let i = 0; i < props.storedSecond.length; i++) {
      const sec = props.storedSecond[i] / 1000;
      sum = sum + sec;
      console.log(sec);
      console.log(sum);
    }
    average = sum / props.storedSecond.length;
    console.log(average);
    return props.storedSecond.length > 0 ? average : 0;
  };

  return (
    <div className="yoroshiku2 + Shadow2">
      <div className="time">Your status</div>
      <div className="text">Correct hit : {getCardNum("correct")}</div>
      <div className="text">Incorrect hit : {getCardNum("incorrect")}</div>
      <div className="text">Missed hit : {props.noHit}</div>
      <div className="text">Death card : 0</div>
      <div className="time">Average duration : {getAverageDuration()}sec</div>
    </div>
  );
};

export default GameOver;
