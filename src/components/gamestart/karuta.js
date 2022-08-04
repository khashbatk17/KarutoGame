import React, { useState } from "react";
import styled from "styled-components";
import css from "../style.module.css";
import { images } from "../../api/images";

const KaContainer = styled.div`
  width: 150px;
  position: relative;
`;

const Karuta = (props) => {
  const [cardClicked, setCardClicked] = useState("");
  return (
    <KaContainer
      className={cardClicked}
      onClick={() => {
        setCardClicked("imgStyle");
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
