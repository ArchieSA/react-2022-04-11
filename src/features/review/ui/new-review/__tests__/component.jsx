import { render, screen } from "@testing-library/react";
import { NewReview } from "../component";

describe("test newreview component", () => {
  it("should correct render newreview", () => {
    render(<NewReview />);
    const spanTest = document.getElementsByTagName("span").length;
    expect(spanTest).toBeGreaterThan(3);
    expect(spanTest).toBeLessThan(5);
    const inputTest = document.getElementsByTagName("input").length;
    expect(inputTest).toBeGreaterThan(2);
    expect(inputTest).toBeLessThan(4);
  });
});
