import { render, screen, fireEvent } from '@testing-library/react'
import FooterCard from '@/components/FooterCard'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../helpers/test-utils'


describe('FooterCard', () => {
  it('render the FooterCard', () => {
    renderWithProviders(<FooterCard  logo={""} header={"tetH"} desc={"desctest"} />);
    
    expect(screen.getByText("tetH")).toBeInTheDocument()
    expect(screen.getByText("desctest")).toBeInTheDocument()
  })
})
