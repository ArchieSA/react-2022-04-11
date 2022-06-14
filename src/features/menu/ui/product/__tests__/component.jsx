import { render, screen, fireEvent } from "@testing-library/react";
import { Product } from "../component";

describe("test product component", () => {
  it("should correct render productName", () => {
    render(<Product productName={"Bread"} />);

    expect(screen.getByText("Bread")).toBeInTheDocument();
  });

  it('should invoke onClick', () => {
    const functionMock = jest.fn();
    const { queryByText } = render(<Product increment={functionMock} />);
    const buttonElement = queryByText('+');

    fireEvent(
      buttonElement,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(functionMock).toHaveBeenCalledTimes(1);
  });
});
