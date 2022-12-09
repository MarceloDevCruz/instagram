// Styled component
import { Message } from './styled'

const Message = ({ msg, type }) => {

  return (
    <Message type={type}>
      <div>
        <p>{msg}</p>
      </div>
    </Message>
  )
}

export default Message