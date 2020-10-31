import styled from 'styled-components'

import { ThemeProps } from '../../utils/interfaces/styles'

export const Container = styled.div.attrs({
  className: 'container'
})`
  width: 100%;
  height: 100%;
`

export const Footer = styled.footer`
  margin-top: 10px;
  padding: 40px 0;
  width: 100%;
  background-color: ${({ theme }: { theme: ThemeProps }) => theme.red};
`
