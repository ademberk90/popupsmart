import { render, screen } from "@testing-library/react"
import Header from '@/components/Header'
import "@testing-library/jest-dom"




describe("Header", () => {
    it("render the header", () => {
      render(<Header />);
      // check if all components are rendered
      expect(screen.getByText("model.carts")).toBeInTheDocument()
      expect(screen.getByText("Solutions")).toBeInTheDocument()
      expect(screen.getByText("Product Tour")).toBeInTheDocument()
      expect(screen.getByText("Showcase")).toBeInTheDocument()
      expect(screen.getByText("Pricing")).toBeInTheDocument()
      expect(screen.getByText("Sign in")).toBeInTheDocument()
      expect(screen.getByText("Try for free")).toBeInTheDocument()

    });
  });