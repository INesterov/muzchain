import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p {
    margin: 0;
    padding: 0;
  }
`;
