import { render, screen } from "@testing-library/react";
import { Header } from "../component";

describe('test header component', () => {
   it('should correct render logo', () => {
      render(<Header/>);

      expect(screen.getByAltText('logo')).toBeInTheDocument();
   })
})