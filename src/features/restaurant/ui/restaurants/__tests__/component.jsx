import { render, screen, fireEvent } from "@testing-library/react";
import { Restaurants } from "../component";

describe("test Restaurants component", () => {
    const restaurants = [{
        id: 1,
        name: 'Foo',
        reviews: [],
        menu: []
    }, {
        id: 2,
        name: 'Bar',
        reviews: [],
        menu: []
    }]
    it("should display first restuarant by default", () => {
        const { container } = render(<Restaurants restaurants={restaurants}/>);

        expect(container.querySelector('.restaurantName')).toHaveTextContent('Foo');
    });
    it("should change restuarant on tab click", () => {
        const { container } = render(<Restaurants restaurants={restaurants}/>);
        const buttonElement = screen.getByText("Bar");

        fireEvent(
          buttonElement,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        expect(container.querySelector('.restaurantName')).toHaveTextContent('Bar');
    });
});