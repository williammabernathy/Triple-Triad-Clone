import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = () => {

  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    //console.log('card loaded');
  });

  return (
    <div className="cardWrapper">
      Cards
    </div>
  );
};

export default Card;
