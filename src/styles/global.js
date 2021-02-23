import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background-color:#151515;
    -webkit-font-smoothing:antialiased;

  }

  body,input,button{
    font:16px Roboto,sans-serif;
  }

  #root{
    width:100%;
    height:100%;
    margin:0 auto;
    padding:30px 20px;
  }
  a{
    text-decoration:none;
  }

  button,a{
    cursor:pointer;
  }

`;
