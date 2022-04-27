import {render, screen} from "@testing-library/react"
import {Restaurants} from "../component";
import {restaurants} from "../../../../../constants/fixtures";

describe("test Restaurants component", () => {
    it("should render restaurants ", () => {
        render(<Restaurants restaurants={restaurants}/>);

        expect(screen.getByText(restaurants[restaurants.length - 1].name)).toBeInTheDocument();
    })

    it("should render empty restaurants ", () => {
        const {container} = render(<Restaurants restaurants={[]}/>);

        expect(container).toBeInTheDocument();
    })
})