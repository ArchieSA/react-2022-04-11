import { render, screen } from "@testing-library/react";
import { Reviews } from "../component";

describe("test Reviews component", () => {
    it("should display reviews", () => {
        const reviews = [{
            id: 1,
            user: "Foo",
            text: "Bar",
            rating: 1
        }, {
            id: 2,
            user: "Buzz",
            text: "Xyzzy",
            rating: 2
        }];

        const { container } = render(<Reviews reviews={reviews}/>);

        expect(container.firstChild.children.length).toEqual(2);
    });

    it("should display nothing if no reviews", () => {
        const { container } = render(<Reviews reviews={[]}/>);

        expect(container.firstChild.children.length).toEqual(0);
    });

})