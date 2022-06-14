import { render, screen } from "@testing-library/react";
import { Reviews } from "../component";
import { reviews } from "../test-reviews";

describe('test reviews component', () => {
   it('should render reviews', () => {
      render(<Reviews reviews={reviews}/>);

      expect(screen.getByText('Text 1')).toBeInTheDocument();
   });
})