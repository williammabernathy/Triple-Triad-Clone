import React, { useState, useEffect } from "react";
import "./CardObj.css";

const CardObj = ({ icon, name, stars, stats }) => {

    const [cardData, setCardData] = useState(null)

    useEffect(() => {
        //console.log('card loaded');
    });

    return (
        <div className="cardObjWrapper">

            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={icon} alt='Icon'></img>
                        </td>
                        <td>
                            {name}
                        </td>
                        <td>
                            {stars}
                        </td>
                        <td>
                            {stats}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default CardObj;