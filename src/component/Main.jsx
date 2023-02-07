import React, { useState } from "react";
import CardLayout from "./CardLayout";
import Footer from "./Footer";
import Data from "../Data.json";
const Main = () => {
  const [cardData, setCardData] = useState([]);
  const handleChange = (e) => {
    let tempArr = [];
    for (let i = 0; i < e.target.value; i++) {
      tempArr.push(Data);
    }
    setCardData([...tempArr]);
  };
  return (
    <div id="main" data-testid="main">
      <div id="mainDiv" data-testid="mainDiv">
        <h1 id="mainHead" data-testid="mainHead">
          {Data.mainHead}
        </h1>
        <p data-testid="mainParagraph">{Data.paragraph}</p>
      </div>
      <div id="mainCard" data-testid="mainCard">
        <CardLayout cardData={cardData} />
      </div>
      <div id="mainFooter" data-testid="mainFooter">
        <Footer handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Main;
