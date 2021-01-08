import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="cardWrapper">
      <div className="cardStats">
        <table>
          <tr>
            <td></td>
            <td>Top Stat</td>
            <td></td>
          </tr>
          <tr>
            <td>Left Stat</td>
            <td></td>
            <td>Right Stat</td>
          </tr>
          <tr>
            <td></td>
            <td>Bottom Stat</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Card;
