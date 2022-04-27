import {render, screen} from "@testing-library/react"
import {Rate} from "../component";

describe("test Rate component", () => {
    it("should render the Stars correctly", async () => {
        render(<Rate value={2}/>);

        const goldStars = await screen.getAllByRole("gold-star");
        expect(goldStars).toHaveLength(2);
    });

    it("should render 5 Gold Stars Maximum even if a greater value is passed as a prop", async () => {
        render(<Rate value={6}/>);

        const goldStars = await screen.getAllByRole("gold-star");
        expect(goldStars).toHaveLength(5);
    });
})