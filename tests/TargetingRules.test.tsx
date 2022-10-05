import { render, screen, fireEvent, queryByAttribute} from '@testing-library/react'
import TargetingRules from '@/components/TargetingRules'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../helpers/test-utils'


describe('TargetingRules', () => {
  it('render the TargetingRules', () => {
    const dom =  renderWithProviders(<TargetingRules />);

    const getYourCode = jest.fn();
    const getById = queryByAttribute.bind(null, 'id');

    
    expect(screen.getByText("Desktop")).toBeInTheDocument()
    expect(screen.getByText("Mobile")).toBeInTheDocument()
    expect(screen.getByText("After X seconds")).toBeInTheDocument()
    expect(screen.getByText("After % Scroll")).toBeInTheDocument()
    expect(screen.getByText("Traffic Source")).toBeInTheDocument()
    expect(screen.getByText("Browser Language")).toBeInTheDocument()
    expect(screen.getByText("Select")).toBeInTheDocument()

  
    const inputAfterXSecond = getById(dom.container, 'afterXSeconds') as HTMLInputElement
    inputAfterXSecond.value = 'test'

    const inputAfterXScroll = getById(dom.container, 'afterXScroll') as HTMLInputElement
    inputAfterXSecond.value = 'test'

    const inputTraffic = screen.getByPlaceholderText("Enter your traffic source domain") as HTMLInputElement
    inputTraffic.value = 'test'
    /*inputWebhook.value = 'testUrl'
    const checkboxes = screen.getAllByRole("checkbox") as HTMLInputElement[]
    checkboxes.forEach(cb => cb.checked = true)

    fireEvent.click(screen.getByText("Get your Code"))
    expect(screen.getByText("Copy the code")).toBeInTheDocument()*/
})
})
