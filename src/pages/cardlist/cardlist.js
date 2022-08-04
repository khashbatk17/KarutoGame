import { Link } from "react-router-dom";
import Card from "../../components/card";
import { cards } from "../../api/cards";
import { images } from "../../api/images";
import "../../style/style.css";
import React from "react";
// import audio from "../../api/Hyakunin_Isshu/Hyakunin_Isshu (0).MP3";

const CardList = () => {
  const arrCards = cards.map((c, index) => {
    return (
      <Card
        key={index}
        syllable={c.syllable}
        name={c.name}
        number={c.number}
        firstHalf={c.firstHalf}
        secondHalf={c.secondHalf}
        img={images[index]}
      />
    );
  });
  return (
    <div className="Container + Shadow">
      <Link to="/">
        <span className="GoBack">
          <img
            src="https://icon-library.com/images/quit-icon/quit-icon-13.jpg"
            alt="goback"
          />
        </span>
      </Link>
      <div className="main">{arrCards}</div>
    </div>
  );
};

export default CardList;
