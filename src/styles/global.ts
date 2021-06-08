import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
    ${normalize}
    html {
        box-sizing: border-box;
    }

    html, body, #__next {
        height: 100vh;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        -webkit-font-smoothing: antialiased;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
`
export default GlobalStyles
