import { fireEvent, render, screen } from "@testing-library/react";
import { Basket } from '../component';

describe('test Basket Container', ()=>{
   
    it('should render basket', ()=>{
        render(<Basket className={'className'} products={{'productName': 1}} />)
        expect(screen.getByText('Basket')).toBeInTheDocument();
    })
    
    it('Btn should call clickHandler', ()=>{
        const foo = jest.fn()
        render(<Basket className={'className'} clickHandler={foo} products={{'productName': 1}} />)
        const btn = screen.getByText('Reset order');
        fireEvent(btn, 
            new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          }));
       expect(foo).toHaveBeenCalledTimes(1);
    })
    
})