import React from "react";
//card list uudeer ashiglasan card haruulah comp

const Card = (props) => {
  const arr = props.firstHalf.split("\n");
  const arr2 = props.secondHalf.split("\n");
  return (
    <article
      className="card"
      onClick={() => {
        // props.setBuscar("$" + props.number);
      }}
    >
      <span className="number">{props.number}</span>
      <img className="card-img" src={props.img} alt="img card" />
      <div className="text">
        <h3 className="tittle">{props.syllable}</h3>
        <p className="poem">
          {arr.map((linea, index) => (
            <span key={index + "linea"}>
              {linea}
              <br></br>
            </span>
          ))}
        </p>
        <p className="poem">
          {arr2.map((linea, index) => (
            <span key={index + "linea"}>
              {linea}
              <br></br>
            </span>
          ))}
        </p>
      </div>
    </article>
  );
};

export default Card;
