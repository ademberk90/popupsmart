import { render, screen, fireEvent } from '@testing-library/react'
import Footer from '@/components/Footer'
import '@testing-library/jest-dom'

describe('footer', () => {
 

  it('render the footer', () => {
    render(<Footer />);
    expect(screen.getByText("Powered by Popupsmart")).toBeInTheDocument()
    expect(screen.getByText("No-Code")).toBeInTheDocument()
    expect(screen.getByText("Don’t worry about speed and Amazon AWS resources")).toBeInTheDocument()
  })
})
