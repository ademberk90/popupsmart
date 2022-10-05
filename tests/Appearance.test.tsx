import { render, screen, fireEvent, queryByAttribute} from '@testing-library/react'
import Appearance from '@/components/Appearance'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../helpers/test-utils'


describe('TargetingRules', () => {
  it('render the TargetingRules', () => {
    const dom =  renderWithProviders(<Appearance />);

    const getYourCode = jest.fn();
    const getById = queryByAttribute.bind(null, 'id');

    
    expect(screen.getByText("Appearance")).toBeInTheDocument()
    expect(screen.getByText("Size")).toBeInTheDocument()
    expect(screen.getByText("Drop your image here or")).toBeInTheDocument()
    expect(screen.getByText("Position")).toBeInTheDocument()

    expect(screen.getByText("Large")).toBeInTheDocument()
    expect(screen.getByText("Medium")).toBeInTheDocument()
    expect(screen.getByText("Small")).toBeInTheDocument()
})
})
