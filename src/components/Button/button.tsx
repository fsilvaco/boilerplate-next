import { ButtonStyles } from './styles'

interface ButtonProps {
  label: string
}

export const Button = ({ label }: ButtonProps) => {
  return <ButtonStyles>{label}</ButtonStyles>
}
