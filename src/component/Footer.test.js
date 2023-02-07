/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("testing footer", () => {
  it("whether it renders footer div", () => {
    let { getByTestId } = render(<Footer handleChange={jest.fn()} />);
    screen.debug();
    expect(getByTestId("footer")).toBeInTheDocument();
  });
});
describe("testing footerBtn", () => {
  it("whether it renders footerBtn", () => {
    let { getByTestId } = render(<Footer handleChange={jest.fn()} />);
    screen.debug();
    expect(getByTestId("footerBtn")).toBeInTheDocument();
  });
});

describe("testing footerInput", () => {
  it("whether it renders footerInput", () => {
    let { getByTestId } = render(<Footer handleChange={jest.fn()} />);
    let input = getByTestId("footerInput");
    fireEvent.change(input, { target: { value: "3" } });
    screen.debug();
    expect(input.value).toBe("3");
    expect(getByTestId("footerInput")).toBeInTheDocument();
  });
});
