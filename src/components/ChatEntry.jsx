import { useState } from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import propTypes from 'prop-types';

const ChatEntry = (props) => {
  const [isLiked, updateLike] = useState(false);

  const displayLike = () => {
    if (isLiked === false) {
      return '🤍';
    } else {
      return '❤️';
    }
  };

  return (
    <section className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp}></TimeStamp>
        <button className="like" onClick={ () => updateLike(!isLiked)}>{displayLike()}</button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  sender: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  timeStamp: propTypes.string.isRequired,
};

export default ChatEntry;
