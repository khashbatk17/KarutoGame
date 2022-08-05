import React, { useState } from "react";
import styled from "styled-components";
import css from "../style.module.css";
import { images } from "../../api/images";

const KaContainer = styled.div`
  width: 150px;
  height: 210px;
  position: relative;
`;

const Karuta = (props) => {
  const [cardClicked, setCardClicked] = useState("");
  const [imgShake, setImgShake] = useState("");
  return (
    <KaContainer
      id={"kaContainer" + props.card.number}
      className={cardClicked + " " + imgShake}
      onClick={() => {
        setCardClicked("imgStyle");

        setImgShake("imgShake");
        let kaco = document.getElementById("kaContainer" + props.card.number);
        let divShadow = document.createElement("div");
        divShadow.setAttribute("class", "imgShadow");
        kaco.appendChild(divShadow);
        setTimeout(() => {
          setImgShake("");
          kaco.removeChild(divShadow);
        }, 500);

        setTimeout(() => {
          setCardClicked("");
        }, 100);
        props.hitTheCard(props.card.number, props.slot);
      }}
    >
      <img
        src={images[props.card.number - 1]}
        alt={props.card.name}
        draggable="false"
      />
      <span className={css.Syllable}>{props.card.syllable}</span>
    </KaContainer>
  );
};

export default Karuta;
