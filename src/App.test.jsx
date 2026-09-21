import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the storefront navigation and checkout entry point', () => {
    render(<App />)
    expect(screen.getByText(/GreenNest/i)).toBeTruthy()
    expect(screen.getByRole('button', { name: /Cửa hàng/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /Đăng nhập/i })).toBeTruthy()
    expect(screen.getByText(/Đặt hàng/i)).toBeTruthy()
  })
})
