import React from "react";

const Popup = (props) => {
  return (
    <div className="yoroshiku" onClick={() => props.clickToStart()}>
      <div className="text">
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
      </div>
    </div>
  );
};

export default Popup;
//duu