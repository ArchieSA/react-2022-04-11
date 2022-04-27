import {render, screen} from "@testing-library/react";
import {Menu} from "../component";
import {restaurants} from "../../../../../constants/fixtures";

const menu = restaurants[0].menu;
describe("test Menu component", () => {
    it("should correct render products' names of Menu", () => {
        render(<Menu menu={menu}/>);

        expect(screen.getByText("Naan")).toBeInTheDocument();
    });
});
