import { render, screen, fireEvent } from '@testing-library/react'
import FeaturesCard from '@/components/FeaturesCard'
import '@testing-library/jest-dom'

describe('FeaturesCard', () => {
  it('render the FeaturesCard', () => {
    render(<FeaturesCard logo={''} header={'header'} desc={'desc'} />);
    
    expect(screen.getByText("header")).toBeInTheDocument()
    expect(screen.getByText("desc")).toBeInTheDocument()
  })
})
