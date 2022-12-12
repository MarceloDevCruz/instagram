import styled from 'styled-components';
import { blue2, danger, gray10, gray5, gray1, blue3, blue4 } from '../../styles/Colors'

export const Container = styled.section`
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em auto;
    border: 1px solid ${gray5};
    max-width: 25%;
    padding: .7em;
    box-shadow: 0px 0px 8px rgba(5,5,5, 0.2);
  }

  h2 {
    color: ${gray10}
  }
`

export const Form = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 430px;
  }

  form input {
    padding: 1em;
    margin: 1em;
    border: none;
    border-bottom: 1px solid ${gray5};
    background-color: ${gray1};
  }
`

export const OtherLinks = styled.div`

  {
    padding-left: 1.5em;
  }
  p {
    font-size: .9em;
    color: ${blue2};
    margin: 1em 0;
    cursor: pointer;
  }

  p:last-child {
    margin: 2em 0;
  }
`

export const Photo = styled.div`

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
  }

  div img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  input[type="file"] {
    display: none;
  }

  label {
    color: ${blue3};
    text-align: center;
    display: block;
    cursor: pointer;
  }

  label:hover {
    color: ${blue4};
  }
`

export const EditProfileButton = styled.div`
  {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5em;
    padding-bottom: 2em;
  }

   button:first-child {
    color: ${danger};
  }

   button {
    border: none;
    font-size: 2.5em;
    cursor: pointer;
    color: ${blue2};
    background-color: transparent;
  }
`