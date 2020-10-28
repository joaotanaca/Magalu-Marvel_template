import styled, { createGlobalStyle } from 'styled-components'

import { ThemeProps } from '../../utils/interfaces/styles'

interface ContainerProps {
  theme: ThemeProps
  route: string
}

export const Container = styled.div.attrs({
  className: 'container'
})`
  width: 100%;
  height: 100%;
`
export const Global = createGlobalStyle`
 body {
    background-color: ${({ theme, route }: ContainerProps) =>
      route === '/' ? theme.white : theme.green};
  }`
