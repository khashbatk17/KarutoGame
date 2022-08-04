import React from "react";
import Karuta from "./karuta";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const SlotContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const CardList = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(8, 150px);
  gap: 10px;
  height: 210px;
`;

class Slot extends React.Component {
  render() {
    return (
      <SlotContainer>
        <Droppable droppableId={this.props.slot.id} direction="horizontan">
          {(provided, snapshot) => {
            return (
              <CardList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.cards.map((card, index) => (
                  <Karuta key={card.number} card={card} index={index} />
                ))}
                {provided.placeholder}
              </CardList>
            );
          }}
        </Droppable>
      </SlotContainer>
    );
  }
}

export default Slot;
