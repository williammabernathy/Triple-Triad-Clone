import React, { useState, useEffect } from "react";
import "./CardObj.css";

const CardObj = ({ title }) => {

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
                            {title}
                        </td>
                        <td>
                            stuff 1
                        </td>
                        <td>
                            stuff 2
                        </td>
                        <td>
                            stuff 3
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default CardObj;