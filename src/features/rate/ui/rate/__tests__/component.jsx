import { render, screen, fireEvent } from "@testing-library/react";
import { Rate } from "../component";
import { MAX_RATING } from "../../../../rate/ui/rate/component";

describe("test Restaurant component", () => {
    it("should display correct rating", () => {
        const value = 3;
        render(<Rate value={value}/>);
        const allImgs = screen.getAllByRole('img')

        const goldStars = allImgs.filter((img) => img.src.endsWith('star-gold.svg'))
        expect(goldStars.length).toEqual(value)

        const stars = allImgs.filter((img) => img.src.endsWith('star.svg'))
        expect(stars.length).toEqual(MAX_RATING - value)
    })
})