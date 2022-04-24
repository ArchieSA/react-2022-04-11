import { render, screen } from "@testing-library/react";
import { Restaurant } from "../component";

const MOCK_RESTAURANT = {
  id: '413',
  name: 'Homestuck',
  menu: [
    {
      id: 'betty',
      name: 'Gushers',
      price: 20,
      ingredients: ['ghost slime', 'instant regret'],
    },
    {
      id: 'aurthor',
      name: 'Centaur milk',
      price: 1,
      ingredients: ['PURE STRENGTH']
    }
  ],
  reviews: [
    {
      id: 'sagittarius',
      user: 'Equius',
      text: 'D--> This is STRONG!',
      rating: 5,
    },
    {
      id: 'ghost',
      user: 'John',
      text: 'darn betty crocker! she got her claws in everything!',
      rating: 2,
    }
  ]
};

describe( name: "test restaurant component", fn: () => {
  it( name: "should correct render restaurant", fn: () => {
    render(<Restaurant restaurant={MOCK_RESTAURANT} />);

    expect(screen.getByText("Homestuck")).toBeInDocument();
  }
});
