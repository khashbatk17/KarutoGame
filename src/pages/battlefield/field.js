import React from "react";
import { Link } from "react-router-dom";
import { cards } from "../../api/cards";
// import css from "./style.module.css";
import "../../style/style.css";
import { DragDropContext } from "react-beautiful-dnd";
import { slots } from "../../api/slots";
import Slot from "../../components/slot";
import SlotTop from "../../components/slotTop";
import "@atlaskit/css-reset";

class Field extends React.Component {
  // state = slots;
  state = {
    ...slots,
    clicked: false,
  };

  onDragStart = (start) => {
    const homeIndex = this.state.slotOrderTop.indexOf(start.source.droppableId);

    this.setState({ homeIndex });
  };

  onDragEnd = (result) => {
    this.setState({ homeIndex: null });

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const home = source.droppableId.includes("slotBottom1")
      ? this.state.slotBottom[source.droppableId]
      : this.state[source.droppableId];

    const foreign = destination.droppableId.includes("slotBottom1")
      ? this.state.slotBottom[destination.droppableId]
      : this.state[destination.droppableId];

    if (home === foreign) {
      const newCardIds = Array.from(home.cardId);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newHome = { ...home, cardId: newCardIds };

      const newState = {
        ...this.state,
        slotBottom: {
          ...this.state.slotBottom,
          [newHome.id]: newHome,
        },
        [newHome.id]: newHome,
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another list

    const homeCardIds = Array.from(home.cardId);
    homeCardIds.splice(source.index, 1);
    const newHome = { ...home, cardId: homeCardIds };

    const foreignCardIds = Array.from(foreign.cardId);
    foreignCardIds.splice(destination.index, 0, draggableId);
    const newForeign = { ...foreign, cardId: foreignCardIds };

    const newState = {
      ...this.state,
      slotBottom: {
        ...this.state.slotBottom,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
      [newHome.id]: newHome,
      [newForeign.id]: newForeign,
    };

    this.setState(newState);
  };

  componentDidUpdate() {
    // if (this.state.slotBottom.slotBottom1.cardId.length === 6) {
    //   this.setState({ ready: true });
    // }

    // if (
    //   this.state.slotBottom.slotBottom1.cardId.length === 0 &&
    //   !this.state.clicked
    // ) {
    //   if (!this.state.ready) {
    //     this.setState({ ready: true });
    //   }
    // }

    if (this.state.slotBottom.slotBottom1.cardId.length === 0) {
      if (!this.state.clicked) {
        this.setState({ clicked: true });
      }
    } else {
      if (this.state.clicked) {
        this.setState({ clicked: false });
      }
    }
  }

  render() {
    return (
      <div className="ContainerField">
        <Link to="/">
          <span className="GoBack">
            <img
              src="https://icon-library.com/images/quit-icon/quit-icon-13.jpg"
              alt="goback"
            />
          </span>
        </Link>
        {this.state.clicked && (
          <Link to="/gamestart" state={this.state}>
            <div className="Ready">Ready</div>
          </Link>
        )}
        <div className="SlotContainer">
          <DragDropContext
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
          >
            <div className="slot-container">
              {this.state.slotOrderTop.map((slotTop, index) => {
                const slot = this.state[slotTop];
                const cardss = slot.cardId.map(
                  (cardId) => cards[Number(cardId) - 1]
                );
                const isDropDisabled = slot.cardId.length === 1;
                return (
                  <SlotTop
                    key={slot.id}
                    slot={slot}
                    cards={cardss}
                    isDropDisabled={isDropDisabled}
                  />
                );
              })}
            </div>
            <div className="card-container">
              {this.state.slotOrderBottom.map((slotBottom, index) => {
                const slot = this.state.slotBottom[slotBottom];
                const cardss = slot.cardId.map(
                  (cardId) => cards[Number(cardId) - 1]
                );
                // console.log(slot.cardId.length);
                // if (slot.cardId.length === 6) {
                //   if (!this.state.ready) {
                //     this.setState({ ready: true });
                //   }
                // }
                return <Slot key={slot.id} slot={slot} cards={cardss} />;
              })}
            </div>
          </DragDropContext>
          {/* {this.state.ready ? <Ready /> : "hi"} */}
        </div>
        {/* <Ready notReady={this.notReady} isVisible={this.state.ready} /> */}
        {/* {this.state.ready && (
          <Ready notReady={this.notReady} state={this.state} />
        )} */}
      </div>
    );
  }
}

export default Field;
//battlefielde