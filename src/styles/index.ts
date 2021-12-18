import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Color } from 'uikit/constants';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    background-color: ${Color.MAIN};
    color: ${Color.PRIMARY};
    font-family: 'Inconsolata', monospace;
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
