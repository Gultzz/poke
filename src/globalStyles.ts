import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
span,
a,
button,
b {
  line-height: 120%;
  font-family: "Poppins", sans-serif;
}
`;
