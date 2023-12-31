import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
} */

body {
  background-color: ${(props) => props.theme['base-white']};
  color: ${(props) => props.theme['base-text']};            

  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

body, input, textarea, button {
  font-family: 'roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  outline: none;
}

a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  button:active, a:active {
    transform: scale(0.97);
  }
`
