import { render, screen } from "@testing-library/react";
import { Rate } from "../component";

describe("test rate component", () => {
  it("should correct render rate", () => {
    render(<Rate rate={{value: 3, size: "medium"}} />);

    const imgTest = document.getElementsByTagName("img").length;
    expect(imgTest).toBeGreaterThan(4);
    expect(imgTest).toBeLessThan(6);
  });
});
