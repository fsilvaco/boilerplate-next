import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from '../'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    title: 'My Button'
  }
} as Meta
export const Primary: Story = (args) => <Button title={args.title} {...args} />
