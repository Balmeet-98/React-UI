import React from "react";
const CardLayout = ({ cardData }) => {
  const generateRandomNumber = () => {
    const minm = 100000;
    const maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  };
  return (
    <>
      {cardData.map((item, index) => {
        let color = generateRandomNumber();
        return (
          <div
            id="card"
            data-testid="card"
            className="cards"
            key={index}
            style={{ backgroundColor: `#${color}` }}
          >
            <h5 data-testid="cardDate">{item?.date}</h5>
            <h1 data-testid="cardHead">
              {item?.heading} {index + 1}
            </h1>
            <p className="cardParagraph" data-testid="cardParagraph">
              {item?.paragraph}
            </p>
            <button
              className="cardBtn"
              data-testid="cardBtn"
              style={{ backgroundColor: `#${color}` }}
            >
              {item?.button}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CardLayout;
