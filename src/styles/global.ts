import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
`;
