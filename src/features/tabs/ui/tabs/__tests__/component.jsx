import { render, screen } from "@testing-library/react";
import { Tabs } from "../component";

describe("test Tabs component", () => {
    const tabs = [{
        id: 1,
        label: 'Foo'
    }, {
        id: 2,
        label: 'Bar'
    }];

    it("should correct render restaurants names", () => {
        render(<Tabs tabs={tabs}/>);

        expect(screen.getByText("Foo")).toBeInTheDocument();
        expect(screen.getByText("Bar")).toBeInTheDocument();
    });

    it("should append .selected class to selected resturant", () => {
        render(<Tabs tabs={tabs} selectedId={2}/>);

        expect(screen.getByText("Bar")).toHaveClass('selected');
    });
})