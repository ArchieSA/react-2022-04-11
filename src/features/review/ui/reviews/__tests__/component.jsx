import { render, screen } from "@testing-library/react";
import { Reviews } from "../component";

const mockReviews = [
  {
    id: '1',
    user: 'one',
    text: 'first',
    rating: 1
  },
  {
    id: '2',
    user: 'two',
    text: 'second',
    rating: 2
  },
];

describe("test reviews component", () => {
  it("should correct render reviews", () => {
    render(<Reviews reviews={ mockReviews } />);

    expect(screen.getByText("one")).toBeInTheDocument();
    expect(screen.getByText("two")).toBeInTheDocument();
    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();

  });
});
