import styled from 'styled-components';
import { sucess, danger, info, warning } from '../../styles/Colors'

export const Message = styled.section`
  
    p {
      color: ${(props) => props.type}
    }

` 