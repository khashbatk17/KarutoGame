import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SlotTop from "../../components/gamestart/slotTop";
import { cards } from "../../api/cards";
import { Link } from "react-router-dom";
import { audio } from "../../api/audio";
import { randomNumber } from "../../api/reading";
import { hittedCard } from "../../api/hittedCard";
import Popup from "../../components/popup";

const GameStart = (props) => {
  const location = useLocation();
  const [state, setState] = useState(location.state);
  const [second, setSecond] = useState(5);
  const [minute, setMinute] = useState(0);
  const [clicked, setClicked] = useState(true); // Memorization hugatsaa false bolwol ehelne
  const [index, setIndex] = useState(0); // Reading, PoemFlowtin's array index
  const [result2, setResult2] = useState(0); // Hitted card's resutl

  let count = 0; // Card hit counter

  const startReading = () => {
    if (minute === 0 && second === 0 && !clicked) {
      const audio1 = [];
      for (let i = 0; i < randomNumber.length; i++) {
        const audio2 = new Audio(audio[randomNumber[i]].path);
        audio1.push(audio2);
      }

      if (index < randomNumber.length) {
        audio1[index].play();
        audio1[index].addEventListener("ended", () => {
          if (index < randomNumber.length) {
            if (index === 0) {
              setIndex(index + 1);
            }

            if (hittedCard.length === index) {
              setIndex(index + 1);
            } else if (hittedCard.length < index) {
              console.log("No hit");
              setIndex(index + 1);
            }
          }
        });
      }
      if (index === randomNumber.length) {
        console.log("Game Over");
      }
    }
  };

  const timer = () => {
    const timeout = setTimeout(() => {
      if (second > 0) {
        setSecond(second - 1);
      } else {
        setSecond(59);
        setMinute(minute - 1);
      }
    }, 1000);

    if ((minute === 0 && second === 0) || (minute === -1 && second === 0)) {
      clearTimeout(timeout);
    }

    let secondFormat = second < 10 ? 0 : "";

    if (minute === 0 && second === 0) {
      return "START!";
    } else {
      return "0" + minute + ":" + secondFormat + second;
    }
  };

  const poemRomaji = () => {
    const jokaRomaji = {
      romaji:
        "Naniwazuni sakuya kono hana fuyu gomori Ima wo harubeto sakuya kono hana Ima wo harubeto sakuya kono hana",
    };
    const romaji = [jokaRomaji.romaji];

    if (minute === 0 && second === 0 && !clicked) {
      randomNumber.map((random) => {
        if (random !== 0) {
          const fHalf = " " + cards[random - 1].firstHalf;
          const sHalf = " " + cards[random - 1].secondHalf;
          romaji.push(fHalf + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + sHalf);
        }
        return 0;
      });
      if (index < randomNumber.length) {
        const p = document.createElement("p");
        p.setAttribute("class", "target");
        p.innerHTML = index + " " + romaji[index];
        const PoemFlow = document.getElementById("PoemFlow");
        PoemFlow.appendChild(p);
      }
    }

    // if (minute === 0 && second === 0 && !clicked) {
    //   return <p className="target">{romaji[index]}</p>;
    // }
  };

  const clickToStart = () => {
    setClicked(false);
  };

  const hitTheCard = (cardId, slot) => {
    const currentCardIndex = randomNumber[index];
    let result;
    if (index !== 0) {
      count++;
      if (count < 2) {
        if (index < randomNumber.length) {
          if (cardId === currentCardIndex.toString()) {
            result = "correct";
            // setResult2(true);
            console.log(result);
          } else {
            result = "incorrect";
            // setResult2(false);
            console.log(result);
          }
          if (result === "correct") {
            slot.cardId.splice(0, 1);
            // const newSlot = slot;
            // newSlot.cardId.splice(0, 1);
            // setState({ ...state, slot: newSlot });
          }
          hittedCard.push(result);
        }
      }
    }
  };

  // ############################################## Mouse Click Style #########################################

  const hidden = minute === 0 && second === 0 ? "" : "";

  const clickEffect = (e) => {
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener("animationend", function () {
      d.parentElement.removeChild(d);
    });
  };

  document.addEventListener("click", clickEffect);

  return (
    <div className="ContainerField" id="clickEffect">
      <Link to="/">
        <span className="GoBack">
          <img
            src="https://icon-library.com/images/quit-icon/quit-icon-13.jpg"
            alt="goback"
          />
        </span>
      </Link>
      {!clicked && startReading()}
      <div className="timer" style={{ visibility: hidden }}>
        {timer()}
      </div>
      <div className="PoemFlow" id="PoemFlow">
        {poemRomaji()}
      </div>
      <div className="SlotContainer">
        {minute === 0 && second === 0 && clicked && (
          <Popup
            clickToStart={clickToStart}
            h1="Yoroshiku onegai shimasu"
            p="Click anywhere to start!"
            yoroshiku={true}
            hittedCard={true}
          />
        )}
        {result2 ? <div className="yoroshiku"></div> : ""}
        <div className="slot-container">
          {state.slotOrderTop.map((slotTop) => {
            const slot = state[slotTop];
            const cardss = slot.cardId.map(
              (cardId) => cards[Number(cardId) - 1]
            );
            return (
              <SlotTop
                key={slot.id}
                slot={slot}
                cards={cardss}
                hitTheCard={hitTheCard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameStart;
