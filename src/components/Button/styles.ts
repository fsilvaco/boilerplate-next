import styled from 'styled-components'

export const ButtonStyles = styled.a`
  background-color: #f31d1d;
  color: #fff;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-property: background-color, color;
  transition-duration: 0.3s;

  &:hover {
    background-color: #454545;
  }
`
