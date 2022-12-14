import styled from 'styled-components';
import { gray5, gray10, gray1, blue3, blue4 } from '../../styles/Colors'

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
`

export const PostPhotos = styled.div`

   h1 {
    text-align: center;
    color: ${gray10};
    margin: 1em;
  }
`
