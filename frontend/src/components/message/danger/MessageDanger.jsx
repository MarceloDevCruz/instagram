const MessageDanger = ({ msg, type }) => {
  return (
    <div className="message__container">
      <span className="message__text-danger">{msg}</span>
    </div>
  )
}

export default MessageDanger