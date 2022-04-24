import { render, screen } from "@testing-library/react";
import { Menu } from "../component";

describe("test menu component", () => {

  const mockMenu = [
    {id: 1, name: "one", product: "first"},
    {id: 2, name: "two", product: "second"},
  ];

  it("should correct render menu", () => {
    render(<Menu menu={mockMenu} className={"SuperGood"} />);

    expect(screen.getByText("one")).toBeInTheDocument();
    expect(screen.getByText("two")).toBeInTheDocument();
  });
});
