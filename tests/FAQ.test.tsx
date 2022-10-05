
import { render, screen, fireEvent } from '@testing-library/react'
import FAQ from '@/components/FAQ'
import { renderWithProviders } from '../helpers/test-utils'
import '@testing-library/jest-dom'

describe('faq', () => {
 

  it('render the accordion', () => {
    renderWithProviders(<FAQ />);
    

    expect(screen.getAllByText("How do I pay for the essentials or premium plan?")[0]).toBeInTheDocument()
  })
})
