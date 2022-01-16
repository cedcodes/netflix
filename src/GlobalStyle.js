import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --white: hsl(0, 0%, 100%);
  --lightGray:  hsl(240, 6%, 54%);
  --darkGray: hsl(240, 17%, 26%);
  
  --bgColor: hsl(240, 67%, 8%);
  
  --mercury: hsl(194, 48%, 49%);
  --venus: hsl(33, 82%, 61%);
  --earth: hsl(263, 67%, 51%);
  --mars: hsl(10, 63%, 51%);
  --jupiter: hsl(2, 68%, 53%);
  --saturn: rgb(203, 80, 32);
  --uranus: hsl(169, 73%, 44%);
  --neptune: hsl(222, 87%, 56%);
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 
html {
  font-size:62.5%;
}
body {
  font-family: 'Spartan', sans-serif;
  color:var(--white);
  background:var(--bgColor);
}
h1,h2 {
  font-family: 'Antonio', sans-serif;
}
button {
  background:none;
  outline:none;
  border:none;
  cursor: pointer;
}
`;
