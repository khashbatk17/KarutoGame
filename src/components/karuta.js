import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import css from "./style.module.css";
import { images } from "../api/images";

const KaContainer = styled.div`
  width: 150px;
  position: relative;
`;

class Karuta extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.card.number} index={this.props.index}>
        {(provided, snapshot) => {
          return (
            <KaContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              <img
                src={images[this.props.card.number - 1]}
                alt={this.props.card.name}
              />
              <span className={css.Syllable}>{this.props.card.syllable}</span>
            </KaContainer>
          );
        }}
      </Draggable>
    );
  }
}

export default Karuta;

//card chireh
