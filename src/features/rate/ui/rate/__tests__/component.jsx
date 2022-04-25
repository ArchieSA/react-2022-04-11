import { render } from "@testing-library/react";
import { Rate } from "../component";

describe('test rate component', () => {
    it('should render correct value of stars', () => {
        const { getAllByAltText } = render(<Rate value={5}/>)
        expect(getAllByAltText('star rating').length).toBe(5);
    });
});