import styled from 'styled-components';
import { gray5, gray10, gray1, blue3, blue4, blue2, gray4, gray9 } from '../../styles/Colors'

export const ProfileContainer = styled.section`
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

export const UserProfile = styled.div`
  {
    display: flex;
    align-items: center;
    gap: 25px;
    border-bottom: 1px solid ${gray10};
  }

  h1, p {
    color: ${gray10};
    margin: 1em 0;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 1em 0;
  }

`

export const FormPostProfile = styled.div`

  {
    border-bottom: 1px solid ${gray10};
  }

  h1 {
    text-align: center;
    color: ${gray10};
    margin: 1em;
  }

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

  input[type="file"] {
    display: none;
  }

  label {
    color: ${blue3};
    text-align: center;
    display: block;
    cursor: pointer;
    margin: 1em;
  }

  label:hover {
    color: ${blue4};
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
      margin: 1em auto;
    }

    button:hover {
      background-color: ${blue3}; 
    }
`

export const PostPhotos = styled.div`

   h1, h3 {
    text-align: center;
    color: ${gray10};
    margin: 1em;
  }

  img {
    height: 400px;
    width: 350px;
    border: 3px solid ${blue2};
    box-shadow: 0px 0px 8px rgba(5,5,5, 0.2);
  }

  div {
    margin: 1em;
  }
`

export const IconsContainer = styled.div`
  ul {
    display: flex;
    margin: .6em;
    justify-content: space-around;
  }

  button {
    border: none
  }

  li button svg, button svg {
    font-size: 2em;
    color: ${gray9};
    cursor: pointer;
  }
`
