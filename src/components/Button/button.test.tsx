import { render } from '@testing-library/react'
import { Button } from '.'

describe('button component test', () => {
  it('Renders correctly', () => {
    render(<Button label="Hello World" />)
  })
})
