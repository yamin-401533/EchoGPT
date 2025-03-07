import React from 'react';
import styles from '../styles/Chat.module.css';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
}

interface ChatHistoryProps {
  messages: Message[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div className={styles.chatHistory}>
      {messages.map((message) => (
        <div key={message.id} className={styles.messageWrapper}>
          <div className={message.sender === 'user' ? styles.user : styles.bot}>
            <div className={styles.messageBubble}>{message.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;