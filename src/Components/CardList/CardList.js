import React, { useState, useEffect } from "react";
import "./CardList.css";
import CardObj from './CardObj/CardObj';

const CardList = ( { allCardData, appLoading }) => {
  const [loading, setLoading] = useState(true);
  console.log('data: ');
  console.log(allCardData);

  useEffect(() => {
    setLoading(appLoading)
  }, [appLoading]);
  
  

  return (
    <div className="cardListWrapper">

      <table>
        <tbody>
          <tr>
            <th>
              Image
            </th>
            <th>
              Name
            </th>
            <th>
              Stars
            </th>
            <th>
              Stats
            </th>
          </tr>
        </tbody>
      </table>

      {loading ? (
        <div className="loading">
          Loading
        </div>)
        : (
          allCardData.results.map((data, index) =>
            <CardObj
              icon={data.icon}
              name={data.name}
              stars={data.stars}
              stats={data.stats.formatted.top}
              key={index}
            />
          )
        )}


    </div>
  );
};

export default CardList;