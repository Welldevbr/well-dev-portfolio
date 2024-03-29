import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
      background: ${({ theme }) => darken(0.5, theme.primary)};
    }
  }

  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;

    @media(max-width:1450px) {
      max-width: 70rem;
    }

    @media(max-width:1000px) {
      max-width: 50rem;
    }

    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

`;
