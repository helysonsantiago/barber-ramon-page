import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  /*Globals Styles*/
  :root{
    
    //--bgk - specifically for the background color.
    --bgk-black: #000000;
    /*-------------------------------------------------*/
    
    //--color - specifically for the text color.
    --color-highlight:#BD00FF;
    --color-white: #fff;
    --color-gray-1: #444;
    --color-gray-2: #909090;
    /*-------------------------------------------------*/

     //--radius - specifically for the border radius.
     --radius-1: 20px;
     --radius-2: 100px;
    /*-------------------------------------------------*/
  }

  /*Standard formatting*/
  *{
  margin: 0;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline-color: skyblue;
  }

  img,svg,button, input::placeholder{
    user-select: none;
  }

  span::selection,
  p::selection,
  a::selection,
  input::selection{
    background-color: skyblue;
    color: var(--color-blue);
  }
  /*Standard formatting*/
  body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

`;

export default GlobalStyles;