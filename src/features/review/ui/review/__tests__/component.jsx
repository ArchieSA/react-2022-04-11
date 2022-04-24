import { render, screen } from "@testing-library/react";
import { Review } from "../component";
import { MAX_RATING } from "../../../../rate/ui/rate/component";

describe("test Review component", () => {
    it("should display user", () => {
        render(<Review user={"Foo"}/>);

        expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should display rating", () => {
        render(<Review rating={3}/>);

        expect(screen.getAllByRole("img").length).toEqual(MAX_RATING);
    });

    it("should display text", () => {
        render(<Review text={"Bar"}/>);

        expect(screen.getByText("Bar")).toBeInTheDocument();
    });

    it("should append className to component root", () => {
        const { container } = render(<Review className={"Buzz"}/>);

        expect(container.firstChild).toHaveClass('Buzz')
    });

})