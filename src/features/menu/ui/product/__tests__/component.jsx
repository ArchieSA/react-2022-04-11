import { render, screen } from "@testing-library/react";
import { Product } from "../component";

describe("test product component", () => {
  it("should correct render productName", () => {
    render(<Product productName={"Bread"} />);

    expect(screen.getByText("Bread")).toBeInTheDocument();
  });
});
