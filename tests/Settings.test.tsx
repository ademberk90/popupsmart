import { render, screen, fireEvent } from '@testing-library/react'
import Settings from '@/components/Settings'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../helpers/test-utils'


describe('Settings', () => {
  it('render the Settings', () => {
    renderWithProviders(<Settings />);

    const getYourCode = jest.fn();

    
    expect(screen.getByText("Settings and Code")).toBeInTheDocument()
    expect(screen.getByText("Webhook to Send data")).toBeInTheDocument()
    expect(screen.getByText("Enter your Webhook URL")).toBeInTheDocument()
    expect(screen.getByText("You can create a simple one with make.com")).toBeInTheDocument()
    expect(screen.getByText("Send click data")).toBeInTheDocument()
    expect(screen.getByText("Get your Code")).toBeInTheDocument()
  
    const inputWebhook = screen.getByPlaceholderText("Your Webhook URL") as HTMLInputElement
    inputWebhook.value = 'testUrl'
    const checkboxes = screen.getAllByRole("checkbox") as HTMLInputElement[]
    checkboxes.forEach(cb => cb.checked = true)

    fireEvent.click(screen.getByText("Get your Code"))
    expect(screen.getByText("Copy the code")).toBeInTheDocument()
})
})
