import React from 'react';
import styles from '../styles/Chat.module.css';

interface ChatMessageProps {
  message: {
    id: number;
    content: string;
    sender: 'user' | 'bot';
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`${styles.messageWrapper} ${message.sender === 'user' ? styles.user : styles.bot}`}>
      <div className={styles.messageHeader}>
        <div className={styles.avatar}>
          {message.sender === 'user' ? '' : ''}
        </div>
      </div>
      <div className={styles.messageBubble}>
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;