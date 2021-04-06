import React, { useState, useEffect } from "react";
import "./CardObj.css";

const CardObj = () => {

    const [cardData, setCardData] = useState(null)

    useEffect(() => {
        //console.log('card loaded');
    });

    return (
        <div className="cardObjWrapper">
            CardObj
        </div>
    );
};

export default CardObj;