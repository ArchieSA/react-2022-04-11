import { render, screen } from "@testing-library/react";
import { Header } from "../component";

describe('Test header', () => {
    it('should render logo', () => {
        const { getByAltText } = render(<Header />);

        expect(getByAltText('logo')).toBeDefined();
    });
});