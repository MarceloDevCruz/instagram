import styled from 'styled-components';
import {
  gray0, gray1, gray5, gray6,
  gray11, blue2, blue3, gray10, gray7
} from '../../styles/Colors'

export const Container = styled.section`

    section {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      min-height: 640px;
      max-width: 470px;
      border: 1px solid ${gray5};
      margin: 4em auto;
      color: ${gray6};
      background-color: white;
    }

    section p {
      text-transform: uppercase;
    }

    h1 {
      font-size: 3em;
      padding: .7em;
      color: ${gray11};
      font-weight: 500;
    }

    button {
      background-color: ${blue2}; 
      color: ${gray1};
      width: 20em;
      height: 2em;
      border: none;
      font-weight: bolder;
      font-size: 1em;
      border-radius: 5px;
      margin: 1em;
    }

    form {
      display: flex;
      flex-direction: column;
      margin: .5em;
      width: 80%;
    }

    form input {
      margin: .5em;
      padding: 1em;
      background-color: ${gray0};
      border: 1px solid ${gray6};
    }

    form input::placeholder {
      font-weight: 500;
      color: ${gray7}
    }

    form input[type=submit] {
      background-color: ${blue2}; 
      color: ${gray1};
      border: none;
      font-weight: bolder;
      font-size: 1em;
      border-radius: 5px;
      cursor: pointer;
    }

    form input[type=submit]:hover,
    button:hover {
      background-color: ${blue3}; 
    }

    section div p {
      line-height: 22px;
      margin: 0 auto;
      text-align: center;
      width: 50%;
      font-size: 1em;
      text-transform: none;
    }

    img {
      margin-top: 2em;
      width: 45%;
    }
` 