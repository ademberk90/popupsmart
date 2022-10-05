import { render, screen, fireEvent } from '@testing-library/react'
import Container from '@/components/Container'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../helpers/test-utils'
describe('Container', () => {
 

  it('render the Container', () => {
    renderWithProviders(<Container />);
    
    expect(screen.getByText("Modal Card Generator")).toBeInTheDocument()
    expect(screen.getByText("Measure your return on email marketing efforts easier and faster by using thebest online tools. Popupsmart is ready to help you build an efficient email list!")).toBeInTheDocument()
  })
})
