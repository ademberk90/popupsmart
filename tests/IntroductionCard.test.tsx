import { render, screen, fireEvent } from '@testing-library/react'
import IntroductionCard from '@/components/IntroductionCard'
import '@testing-library/jest-dom'

describe('IntroductionCard', () => {
 

  it('render IntroductionCard', () => {
    render(<IntroductionCard />);
    
    expect(screen.getByText("Join the club")).toBeInTheDocument()
    expect(screen.getByText("Grow email list")).toBeInTheDocument()
    expect(screen.getByText("Increase sales conversion")).toBeInTheDocument()
    expect(screen.getByText("Subscribe")).toBeInTheDocument()
  })
})
