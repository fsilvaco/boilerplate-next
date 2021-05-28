import { Wrapper } from './styles'

type Props = {
  children: React.ReactChild
}

export const Main = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>
}
