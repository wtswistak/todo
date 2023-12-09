interface MessageProps {
  message: string;
  isLoading?: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isLoading }) => {
  return (
    message &&
    !isLoading && (
      <div className="d-flex mt-1">
        <p className="font-sm font-alert">{message}</p>
      </div>
    )
  );
};

export default Message;
