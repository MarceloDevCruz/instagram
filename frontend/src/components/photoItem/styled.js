import styled from 'styled-components'
import {
  gray5, gray6, gray10, blue2, blue4
} from '../../styles/Colors'

export const PhotoItemContainer = styled.div`
     {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      margin: 4em auto;
      color: ${gray10};
    }

    h2 {
      font-weight: bolder;
      color: ${blue4}
    }

    img {
      width: 500px;
      height: 500px;
      padding: 2em 1em 0 1em;
    }

    a {
      color: ${blue2}
    }
`