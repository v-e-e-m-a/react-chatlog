import ChatEntry from './ChatEntry';
import propTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <>{props.entries.map((entry) => (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLikeToggle={props.onChatLikeToggle}>
      </ChatEntry>
    ))};
    </>
  )};

ChatLog.propTypes = {
  entries: propTypes.array.isRequired,
  onChatLikeToggle: propTypes.func
};

export default ChatLog;