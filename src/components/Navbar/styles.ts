import styled from 'styled-components'
import { ThemeProps } from '../../utils/interfaces/styles'

export const Nav = styled.nav.attrs({
  className: 'container'
})`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 30%;
  margin: 20px 0;
  img {
    width: 100%;
  }
`
export const TitleNav = styled.h3`
  margin: 0;
  font-size: calc(12px + 1.7vw);
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }: { theme: ThemeProps }) => theme.text_primary};
`
export const SubtitleNav = styled.p`
  margin-top: 20px;
  font-size: calc(10px + 0.4vw);
  color: ${({ theme }: { theme: ThemeProps }) => theme.text_secondary};
`

export const InputContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  position: relative;
  img {
    position: absolute;
    width: 30px;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  input {
    width: calc(100% - 80px);
    padding: 20px 0 20px 80px;
    border-radius: 30px;
    background-color: ${({ theme }: { theme: ThemeProps }) => theme.rose};
    color: ${({ theme }: { theme: ThemeProps }) => theme.red};
    font-size: calc(11px + 0.4vw);
    border: 0;
    &::placeholder {
      color: ${({ theme }: { theme: ThemeProps }) => theme.red};
    }
  }
`
