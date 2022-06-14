import { render, screen, fireEvent } from "@testing-library/react";
import { Restaurant } from "../component";
import { MAX_RATING } from "../../../../rate/ui/rate/component";

describe("test Restaurant component", () => {
    const restuarant = {
        id: 1,
        name: 'Foo',
        menu: [{
            id: 1,
            name: 'Bar'
        }],
        reviews: [{
            id: 2,
            user: "Buzz",
            text: "Xyzzy",
            rating: 2
        }],
    }
    it("should display restuarant name", () => {
        render(<Restaurant restaurant={restuarant}/>);
        expect(screen.getByText("Foo")).toBeInTheDocument();
    })
    it("should display restuarant rate", () => {
        const { container } = render(<Restaurant restaurant={restuarant}/>);
        expect(container.querySelector('.mainInfo').querySelectorAll('img').length).toEqual(MAX_RATING);
    })
    it("should display restuarant menu", () => {
        render(<Restaurant restaurant={restuarant}/>);
        expect(screen.getByText("Bar")).toBeInTheDocument();
    })
    it("should display restuarant reviews", () => {
        render(<Restaurant restaurant={restuarant}/>);
        expect(screen.getByText("Buzz")).toBeInTheDocument();
        expect(screen.getByText("Xyzzy")).toBeInTheDocument();
    })
    it("should display NewReview component", () => {
        render(<Restaurant restaurant={restuarant}/>);
        expect(screen.getByText("Set Your review here!")).toBeInTheDocument();
    })
})