import { render, screen } from "@testing-library/react";
import { App } from "../App.jsx";
import { restaurants } from "../../../constants/fixtures";

describe("test App render", () => {
  it("should correct render productName", () => {
    render(<App restaurants={restaurants}/>);

    expect(document.getElementsByName("logo")).toBeTruthy();
    expect(document.getElementsByName("mainInfo")).toBeTruthy();
    expect(document.getElementsByName("star")).toBeTruthy();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Chicken tikka masala")).toBeInTheDocument();
    expect(screen.getByText("Antony")).toBeInTheDocument();
    expect(screen.getByText("Set Your review here!")).toBeInTheDocument();
  });
});
