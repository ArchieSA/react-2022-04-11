import { render, screen } from "@testing-library/react";
import { Restaurant } from "../component";

const restaurant = {
    name: 'TestRest',
    menu: [],
    reviews: [],
}

describe("test restaurant component", () => {
  it("should correct render Restaurant", () => {
    render(<Restaurant restaurant={restaurant} />);

    expect(screen.getByText("TestRest")).toBeInTheDocument();
  });
});
