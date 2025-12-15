import { useState } from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import propTypes from 'prop-types';

const ChatEntry = (props) => {
  const likeButtonClicked = () => {
    props.onLikeToggle(props.id);
  };

  const displayLikeButton = () => {
    if (props.liked === true) {
      return '❤️';
    } else {
      return '🤍';
    }
  };

  const chatEntryClass = () => {
    if (props.sender === 'Vladimir') {
      return 'chat-entry local';
    } else {
      return 'chat-entry remote';
    };
  };

  return (
    <section className={chatEntryClass()}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp}></TimeStamp>
        <button className="like" onClick={likeButtonClicked}>{displayLikeButton()}</button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  id: propTypes.number.isRequired,
  sender: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  timeStamp: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  onLikeToggle: propTypes.func.isRequired
};

export default ChatEntry;
