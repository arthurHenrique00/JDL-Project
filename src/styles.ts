import { createGlobalStyle } from 'styled-components'

export const colors = {
  first: '#FF0000',
  second: '#008000',
  third: '#000',
  fourth: '#ffff'
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      overflow-x: hidden;
    }
`
export default GlobalStyle
