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
    ;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatData} onChatLikeToggle={toggleLikeButton}></ChatLog>
      </main>
    </div>
  );
};

export default App;
