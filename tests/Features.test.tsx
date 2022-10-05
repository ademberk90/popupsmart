import { render, screen, fireEvent } from '@testing-library/react'
import Features from '@/components/Features'
import '@testing-library/jest-dom'

describe('Conversion & UX ready popups & modals', () => {
 

  it('render the Conversion & UX ready popups & modals', () => {
    render(<Features />);
    
    expect(screen.getByText("Conversion & UX ready popups & modals")).toBeInTheDocument()
  })
})
