import styled from "styled-components";
import Karuta from "./karuta";
import React from "react";

const CardList = styled.div`
  width: 150px;
  height: 210px;
`;

const SlotTop = (props) => {
  return (
    <CardList>
      {props.cards.map((card, index) => (
        <Karuta
          key={card.number}
          card={card}
          index={index}
          hitTheCard={props.hitTheCard}
          slot={props.slot}
        />
      ))}
    </CardList>
  );
};

export default React.memo(SlotTop);
