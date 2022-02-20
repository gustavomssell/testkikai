import { createGlobalStyle } from "styled-components";
 
export default createGlobalStyle`
@font-face {
    font-family: 'Star Jedi';
    font-style: normal;
    font-weight: 400;
    src: local('Star Jedi'), local('StarJedi'),
    url("./fonts/Starjedi.ttf") format('truetype');
    display: swap;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  a,
  a:link,
  a:hover,
  a:focus {
    color: currentColor;
    text-decoration: none;
   // cursor: pointer;
  }
  
  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
    
  //  font-family: 'Star Jedi';
  }
`;