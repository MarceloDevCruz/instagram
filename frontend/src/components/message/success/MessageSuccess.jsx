// Styled component
import { MessageStyled } from './styled'

const MessageSuccess = ({ msg, type }) => {

  return (
    <MessageStyled type={type}>
      <span>{msg}</span>
    </MessageStyled>
  )
}

export default MessageSuccess