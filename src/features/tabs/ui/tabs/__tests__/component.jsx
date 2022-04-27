import {render, screen} from "@testing-library/react";
import {Tabs} from "../component";
import {tabs} from "./mocks";

describe("test Tabs component", () => {
    it("tabs should render correctly", () => {
        const funcMock = jest.fn();

        render(<Tabs tabs={tabs} onTabSelect={funcMock}/>);
        expect(screen.getByText(tabs[tabs.length - 1].label)).toBeInTheDocument();
    });
});
