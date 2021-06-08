import * as S from './styles'

export const Main = ({
  title = '🦄 boileplate-frontend',
  description = 'A simple project started with Typescript, React, NextJS, Styled-Components, EsLint, Prettier, Husky, Jest and Storybook'
}) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </S.Wrapper>
  )
}
