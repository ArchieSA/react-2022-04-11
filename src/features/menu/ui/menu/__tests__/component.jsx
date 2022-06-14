import { render, screen } from "@testing-library/react";
import { Menu } from "../component";

describe("test Menu component", () => {
    it("should display products", () => {
        const menu = [{
            id: 1,
            name: "Foo"
        }, {
            id: 2,
            name: "Bar"
        }]

        render(<Menu menu={menu} />);

        expect(screen.getByText("Foo")).toBeInTheDocument();
        expect(screen.getByText("Bar")).toBeInTheDocument();
    });
});
