import { css } from 'styled-components'

type ObjectKeyString = {
  [key: string]: string
}

const breakpoints: ObjectKeyString = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
}

const mixins = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: string[]) =>
    css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(literals, ...placeholders)};
      }
    `.join('')
  return acc
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: string[]) => string>)

export default mixins
