import { render, screen } from "@testing-library/react";
import { Restaurant } from "../component";

describe("test restraunt component", () => {
  it("should correct render restraunt component", () => {
    let testRestraunt = {
      name: "testRestraunt",
      reviews: [],
      menu: [],
    };
    render(<Restaurant restaurant={testRestraunt} />);

    expect(screen.getAllByTestId("restaurant-element").length).toBe(1);
  });
});
