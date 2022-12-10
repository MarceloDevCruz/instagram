// Styled component
import { MessageStyled } from './styled'

const MessageDanger = ({ msg, type }) => {

  return (
    <MessageStyled type={type}>
      <span>{msg}</span>
    </MessageStyled>
  )
}

export default MessageDanger