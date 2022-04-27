import {render, screen} from "@testing-library/react"
import {Reviews} from "../component";
import {reviews} from "./mocks";

describe("test Reviews component", () => {
    it("should render reviews correctly", () => {
        render(<Reviews reviews={reviews}/>);

        expect(screen.getByText(reviews[reviews.length - 1].text)).toBeInTheDocument();
    })
})