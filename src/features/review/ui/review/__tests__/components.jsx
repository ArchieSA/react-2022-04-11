import { render, screen } from "@testing-library/react";
import { Review } from "../component";

const review = {
    user: 'TestUser',
    text: 'Should this test work?',
}

describe("test review component", () => {
  it("should correct render review user name and text", () => {
    render(
        <Review 
            user={review.user}
            text={review.text}
        />
    );

    expect(screen.getByText("TestUser")).toBeInTheDocument();
    expect(screen.getByText("Should this test work?")).toBeInTheDocument();
  })
});
