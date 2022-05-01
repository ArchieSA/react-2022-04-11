import { render, screen } from "@testing-library/react";
import { Tabs } from "../component";

describe("test Tabs render", () => {
  it("should correct render tabs", () => {

    const mockTabs = [
      {name: "one", id: 1},
      {name: "two", id: 2},
    ];

    render(<Tabs 
      tabs={mockTabs.map(({ name, id }) => ({ label: name, id }))}
      selectedId={1}
      onTabSelect={() => console.log("Hi")}
    />);

    expect(screen.getByText("one")).toBeInTheDocument();
    expect(screen.getByText("two")).toBeInTheDocument();
  });
});
