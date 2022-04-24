import { render, screen } from "@testing-library/react";
import { Restaurant } from "../component";

const mockRestaurant = {
  menu: [
    {
      id: '01',
      name: 'zero-one',
      price: 10,
      ingredients: ['i1', 'i2', 'i3'],
    },

  ],
  reviews: [
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
  ]
};

describe("test restaurant component", () => {
  it("should correct render restaurant", () => {
    render(<Restaurant restaurant={mockRestaurant} />);

    const imgTest = document.getElementsByTagName("img").length;
    expect(imgTest).toBeGreaterThan(14);
    expect(imgTest).toBeLessThan(16);

    expect(screen.getByText("one")).toBeInTheDocument();
    expect(screen.getByText("two")).toBeInTheDocument();
    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();
    expect(screen.getByText("zero-one")).toBeInTheDocument();

  });
});
