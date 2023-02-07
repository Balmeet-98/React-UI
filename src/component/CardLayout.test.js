/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardLayout from "./CardLayout";

let cardData = [
  {
    date: "30 sep 2020",
    heading: "Title",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fugit odio a, odit tempore velit laboriosam numquam impedit ut qui recusandae nostrum est modi quo maxime excepturi blanditiis inventore at repudiandae, accusamus nobis consequuntur corporis quae? Esse enim, quidem placeat, blanditiis eligendi recusandae provident quos modi sapiente sit at dicta, velit natus minima dolorem ipsa quam aperiam similique minus unde!",
    button: "Read More",
  },
];

describe("testing card Div", () => {
  it("whether it renders card div", () => {
    let { getByTestId } = render(<CardLayout cardData={cardData} />);
    screen.debug();
    expect(getByTestId("card")).toBeInTheDocument();
  });
});

describe("testing cardDate", () => {
  it("whether it renders cardDate", () => {
    let { getByTestId } = render(<CardLayout cardData={cardData} />);
    screen.debug();
    expect(getByTestId("cardDate")).toBeInTheDocument();
  });
});

describe("testing cardHead", () => {
  it("whether it renders cardHead", () => {
    let { getByTestId } = render(<CardLayout cardData={cardData} />);
    screen.debug();
    expect(getByTestId("cardHead")).toBeInTheDocument();
  });
});

describe("testing cardParagraph", () => {
  it("whether it renders cardParagraph", () => {
    let { getByTestId } = render(<CardLayout cardData={cardData} />);
    screen.debug();
    expect(getByTestId("cardParagraph")).toBeInTheDocument();
  });
});

describe("testing cardBtn", () => {
  it("whether it renders cardBtn", () => {
    let { getByTestId } = render(<CardLayout cardData={cardData} />);
    screen.debug();
    expect(getByTestId("cardBtn")).toBeInTheDocument();
  });
});
