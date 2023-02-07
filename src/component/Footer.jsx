import React from "react";
const Footer = ({ handleChange }) => {
  return (
    <div data-testid="footer">
      <button id="inputBtn" data-testid="footerBtn">
        Read More
      </button>
      <input
        type="text"
        id="inputText"
        data-testid="footerInput"
        placeholder="enter the required no. of tiles"
        onChange={handleChange}
      />
    </div>
  );
};

export default Footer;
