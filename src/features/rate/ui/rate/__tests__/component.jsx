import { render, screen, fireEvent } from "@testing-library/react";
import { Rate } from "../component";

describe("test rate component", () => {
  it("should correct render value", () => {
    let testVal = 10;
    render(<Rate value={testVal} />);
    expect(screen.getAllByTestId("rate-element").length).toBeLessThanOrEqual(5);
  });

  it("should invoke onClick", () => {
    const functionMock = jest.fn();

    render(<Rate value={10} isEditable={true} changeRate={functionMock} />);

    const rateElement = screen.getAllByTestId("rate-element")[0];

    fireEvent(
      rateElement,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(functionMock).toHaveBeenCalledTimes(1);
  });
});
