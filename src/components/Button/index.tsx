// import styled from 'styled-components'
import * as S from './styles'

interface IButton {
  title: string
}

export const Button = ({ title }: IButton) => {
  return <S.ButtonStyles>{title}</S.ButtonStyles>
}
