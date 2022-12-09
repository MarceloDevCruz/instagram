import styled from 'styled-components';
import { gray1, gray11, gray7, blue2, blue3 } from '../../styles/Colors'

export const Container = styled.section`
    section {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      min-height: 740px;
      max-width: 560px;
      border: 1px solid ${gray11};
      margin: 4em auto;
      color: ${gray7};
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
      background-color: ${gray1};
      border: 1px solid ${gray7};
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
` 