import { render, screen } from "@testing-library/react";
import { Review } from "../component";

describe("test review component", () => {
  it("should correct render user", () => {
    render(<Review user={"User"} />);
    expect(screen.getByText("User")).toBeInTheDocument();
  });

  it("should correct render text", () => {
    render(<Review text={"Text"} />);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
});
