import * as S from './styles'

export const Main = ({
  title = 'Boileplate',
  description = 'Edit the Main component'
}) => {
  return (
    <S.Wrapper>
      <p>{title}</p>
      <p>{description}</p>
    </S.Wrapper>
  )
}
