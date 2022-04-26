import { render, screen } from "@testing-library/react";
import { Review } from "../component";

describe("test review component", () => {
  it("should correct render review", () => {
    render(<Review />);
    const spanTest = document.getElementsByTagName("span").length;
    expect(spanTest).toBeGreaterThan(1);
    expect(spanTest).toBeLessThan(3);
  });
});
