import { render, screen } from "@testing-library/react";
import { Rate } from "../component";

describe('test rate component', () => {
   it('should correct render gold stars', () => {
      render(<Rate value={2}/>);

      expect(screen.getAllByAltText('Gold Star')).toHaveLength(2);
   })
})