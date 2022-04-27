import {render, screen} from "@testing-library/react"
import {Review} from "../component";

describe("test Review component", () => {
    it("should render name correctly", () => {
        render(<Review user="New User"/>);

        expect(screen.getByText("New User")).toBeInTheDocument();
    })
    it("should render text correctly", () => {
        render(<Review user="New Text"/>);

        expect(screen.getByText("New Text")).toBeInTheDocument();
    })
    it("should render rating correctly", () => {
        render(<Review user="New Rating"/>);

        expect(screen.getByText("New Rating")).toBeInTheDocument();
    })
})