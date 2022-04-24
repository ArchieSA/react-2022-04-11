import { render, screen, fireEvent } from "@testing-library/react";
import { Tab } from "../component";

describe("test tab component", () => {
  it("should correct render label", () => {
    render(<Tab label={"New Restaurant"} />);

    expect(screen.getByText("New Restaurant")).toBeInTheDocument();
  });

  it("should invoke onTabSelect", () => {
    const functionMock = jest.fn();

    render(<Tab label={"New Restaurant"} onTabSelect={functionMock} />);

    const buttonElement = screen.getByText("New Restaurant");

    fireEvent(
      buttonElement,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(functionMock).toHaveBeenCalledTimes(1);
  });
});
