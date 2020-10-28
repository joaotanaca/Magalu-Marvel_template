import { createGlobalStyle } from 'styled-components'

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
    }
    .container{
      width: calc(100% - 20px);
      max-width: 1080px;
      margin: 0 auto;
    }
`
