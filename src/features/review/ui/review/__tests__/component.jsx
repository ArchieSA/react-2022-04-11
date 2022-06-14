import { render, screen } from "@testing-library/react";
import { Review } from "../component";

describe('test review component', () => {
   it('should render review', () => {
      render(<Review user='User' text='text' id='1'/>);

      expect(screen.getByText('text')).toBeInTheDocument();
   })
})