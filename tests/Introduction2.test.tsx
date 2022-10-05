import { render, screen, fireEvent } from '@testing-library/react'
import Introduction2 from '@/components/Introduction2'
import '@testing-library/jest-dom'

describe('Introduction2', () => {
 

  it('render Introduction2', () => {
    render(<Introduction2 />);
    
    expect(screen.getByText("3x")).toBeInTheDocument()
    expect(screen.getAllByText("Increase Conversion Rate")[0]).toBeInTheDocument()
    expect(screen.getByText("120%")).toBeInTheDocument()
    expect(screen.getByText("Popupsmart meets all your business needs.")).toBeInTheDocument()
    expect(screen.getByText("More Customer Engagement")).toBeInTheDocument()
  })
})
