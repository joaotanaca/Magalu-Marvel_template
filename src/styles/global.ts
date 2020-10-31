import { createGlobalStyle } from 'styled-components'
import { ThemeProps } from '../utils/interfaces/styles'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }
    body{
        font-family: 'Work Sans', sans-serif;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${(props: { theme: ThemeProps }) => props.theme.text_primary};
    }
    .container{
      width: calc(100% - 20px);
      max-width: 1080px;
      margin: 0 auto;
    }
`
