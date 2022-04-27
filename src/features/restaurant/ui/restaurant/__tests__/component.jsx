import {render, screen} from "@testing-library/react"
import {Restaurant} from "../component";
import {restaurants} from "../../../../../constants/fixtures";

describe("test Restaurant component", () => {
    it("should render restaurant's name correctly", () => {
        render(<Restaurant restaurant={restaurants[0]}/>);

        expect(screen.getByText(restaurants[0].name)).toBeInTheDocument();
    })
    it("should render restaurant's menu correctly", () => {
        render(<Restaurant restaurant={restaurants[0]}/>);

        expect(screen.getByText(restaurants[0].menu[0].name)).toBeInTheDocument();
    })
    it("should render restaurant's reviews correctly", () => {
        render(<Restaurant restaurant={restaurants[0]}/>);

        expect(screen.getByText(restaurants[0].reviews[0].text)).toBeInTheDocument();
    })
})