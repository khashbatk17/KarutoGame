import React from "react";
import Karuta from "./karuta";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardList = styled.div`
  width: 150px;
  height: 210px;
  background: ${(props) =>
    props.isDraggingOver ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)"};
`;

class SlotTop extends React.Component {
  render() {
    return (
      <>
        <Droppable
          droppableId={this.props.slot.id}
          direction="horizontan"
          isDropDisabled={this.props.isDropDisabled}
        >
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
      </>
    );
  }
}

export default SlotTop;
//chireh