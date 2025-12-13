import './App.css';
import ChatEntry from './components/ChatEntry';
import data from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(data);

  const toggleLikeButton = (chatId) => {
    const chats = chatData.map(chat => {
      if (chat.id === chatId) {
        return {...chat, liked: !chat.liked};
      } else {
        return chat;
      }
    });
    setChatData(chats);
    calculateLikeNumber();
  };

  const calculateLikeNumber = () => {
    let counter = 0;
    for (let entry of chatData) {
      if (entry.liked === true) {
        counter += 1;
      }
      console.log(counter);
    }
    return counter;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>Like Counter: {calculateLikeNumber()}</h2>
      </header>
      <main>
        <ChatLog entries={chatData} onChatLikeToggle={toggleLikeButton}></ChatLog>
      </main>
    </div>
  );
};

export default App;
