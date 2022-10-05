
import { render, screen, fireEvent } from '@testing-library/react'
import FAQItem from '@/components/FAQItem'
import { renderWithProviders } from '../helpers/test-utils'
import '@testing-library/jest-dom'

describe('faq', () => {
 

  it('render the accordion', () => {
    renderWithProviders(<FAQItem id={1} question={"testQ"} answer={"testA"} />);
    

    expect(screen.getByText("testQ")).toBeInTheDocument()
    expect(screen.getByText("testA")).toBeInTheDocument()
  })
})
