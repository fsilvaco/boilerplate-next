import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Primary as Button } from '../stories/Button.stories'

describe('testing button component', () => {
  const title = 'Hello'
  test('should render button text', () => {
    render(<Button title={title} />)
    const button = screen.getByText(title)
    expect(button).toBeInTheDocument()
  })
  test('should change background color when hover user', async () => {
    render(<Button title={title} />)
    const button = screen.getByText(title)
    userEvent.hover(button)
    expect(button).toHaveStyle(`
      background-color: #f31d1d
    `)
  })
})
