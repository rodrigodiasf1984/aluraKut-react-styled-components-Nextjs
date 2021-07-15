import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  body {
    background-color: #D9E6F6;
    font-family: sans-serif;
  }
  button {
    cursor:pointer;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction:column;
  }

  img{
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#FFFFFF',
    linkColor: '#2e7BB4',
    gray_50: '#f4f4f4',
    gray_400: '#333333',
    blue_50: '#6F92BB',
    black: '#00000073',
  },
};
