/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";

describe("testing main", () => {
  it("whether it renders main", () => {
    let { getByTestId } = render(<Main />);
    screen.debug();
    expect(getByTestId("main")).toBeInTheDocument();
  });
});

describe("testing mainDiv", () => {
  it("whether it renders mainDiv", () => {
    let { getByTestId } = render(<Main />);
    screen.debug();
    expect(getByTestId("mainDiv")).toBeInTheDocument();
  });
});

describe("testing mainHead", () => {
  it("whether it renders mainHead", () => {
    let { getByTestId } = render(<Main />);
    screen.debug();
    expect(getByTestId("mainHead")).toBeInTheDocument();
  });
});

describe("testing mainParagraph", () => {
  it("whether it renders mainParagraph", () => {
    let { getByTestId } = render(<Main />);
    screen.debug();
    expect(getByTestId("mainParagraph")).toBeInTheDocument();
  });
});

describe("testing mainCard", () => {
  it("whether it renders mainCard", () => {
    let { getByTestId } = render(<Main />);
    screen.debug();
    expect(getByTestId("mainCard")).toBeInTheDocument();
  });
});

describe("testing mainFooter", () => {
  it("whether it renders mainFooter", () => {
    let { getByTestId } = render(<Main />);
    screen.debug();
    expect(getByTestId("mainFooter")).toBeInTheDocument();
  });
});

describe("testing footerInput", () => {
  it("whether it renders footerInput", () => {
    let { getByTestId } = render(<Main />);
    let input = getByTestId("footerInput");
    fireEvent.change(input, { target: { value: "3" } });
    screen.debug();
    expect(input.value).toBe("3");
    expect(getByTestId("footerInput")).toBeInTheDocument();
  });
});
