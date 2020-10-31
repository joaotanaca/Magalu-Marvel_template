import { Link } from 'react-router-dom'
import styled from 'styled-components'
import mixins from '../../styles/mixins'
import { ThemeProps } from '../../utils/interfaces/styles'

interface PropStyle {
  theme: ThemeProps
}
interface ContainerProps {
  theme: ThemeProps
  route: string
}

export const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  &.hero {
    flex-flow: row;
    justify-content: flex-start;
    ${mixins.sm`
      justify-content: space-between;
    `}
    a {
      width: 20%;
      ${mixins.sm`
        width: 40%;
      `}
    }
    .input-container {
      width: 50%;
      margin: 0 0 0 60px;
      ${mixins.sm`
        margin-left: 0;
        width: 45%;
      `}
      img {
        width: 20px;
        left: 10px;
        ${mixins.sm`
          left: 10px;
          width: 20px;
        `}
      }
      input {
        width: calc(100% - 40px);
        padding: 10px 0 10px 40px;
        font-size: calc(10px + 0.3vw);
        ${mixins.sm`
          width: calc(100% - 40px);
          padding: 10px 0 10px 40px;
        `}
      }
    }
  }
`

export const ImageContainer = styled(Link)`
  width: 30%;
  margin: 20px 0;
  ${mixins.xs`
    width: 70%;
  `}
  ${mixins.sm`
    width: 50%;
  `}
  img {
    width: 100%;
  }
`
export const TitleNav = styled.h3`
  margin: 0;
  font-size: calc(12px + 1.7vw);
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }: PropStyle) => theme.text_primary};
`
export const SubtitleNav = styled.p`
  margin-top: 20px;
  font-size: calc(10px + 0.3vw);
  color: ${({ theme }: PropStyle) => theme.text_secondary};
  ${mixins.sm`
    display: none;
  `}
`

export const InputContainer = styled.div.attrs({
  className: 'input-container'
})`
  width: 90%;
  margin-top: 20px;
  position: relative;
  img {
    position: absolute;
    width: 30px;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    ${mixins.sm`
      left: 10px;
      width: 20px;
    `}
  }
  input {
    width: calc(100% - 80px);
    padding: 20px 0 20px 80px;
    border-radius: 30px;
    background-color: ${({ theme }: PropStyle) => theme.rose};
    color: ${({ theme }: PropStyle) => theme.red};
    font-size: calc(11px + 0.4vw);
    border: 0;
    ${mixins.sm`
      width: calc(100% - 40px);
      padding: 10px 0 10px 40px;
    `}
    &::placeholder {
      color: ${({ theme }: PropStyle) => theme.red};
    }
  }
`
