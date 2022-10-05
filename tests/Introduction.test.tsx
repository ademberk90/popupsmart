import { render, screen, fireEvent } from '@testing-library/react'
import Introduction from '@/components/Introduction'
import '@testing-library/jest-dom'

describe('Introduction', () => {
 

  it('render Introduction', () => {
    render(<Introduction />);
    
    expect(screen.getByText("Simple modal card creator")).toBeInTheDocument()
    expect(screen.getByText("Free and paid plans")).toBeInTheDocument()
  })
})
