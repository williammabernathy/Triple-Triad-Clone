import React from "react";
import "./CardList.css";
import CardObj from './CardObj/CardObj';

const CardList = () => {

  const titles = ['title 1', 'title 2', 'title 3'];

  return (
    <div className="cardListWrapper">

      <table>
        <tr>
          <th>
            <th>
              Image
            </th>
            <th>
              Stat 1
            </th>
            <th>
              Stat 2
            </th>
            <th>
              Stat 3
            </th>
          </th>
        </tr>
      </table>

      {titles.map((title, index) =>
        <CardObj title={titles[index]}
          key={index}
        />
      )}

    </div>
  );
};

export default CardList;