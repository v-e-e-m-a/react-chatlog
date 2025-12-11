import ChatEntry from './ChatEntry';
import propTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <>{props.entries.map((entry) => (
      <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}></ChatEntry>
    ))}
    </>
  )}

ChatLog.propTypes = {
  entries: propTypes.array.isRequired
};

export default ChatLog;