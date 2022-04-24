import { render, screen } from "@testing-library/react";
import { Header } from "../header/component";

describe("test Header component", () => {
    it("should display logo", () => {
        render(<Header/>);

        const img = screen.getByRole('img')
        expect(img.src.endsWith('logo.svg')).toBeTruthy() 
    });
});