import React, { useState } from 'react';
import { fetchEchoGPTResponse } from '../utils/echogpt';
import styles from '../styles/Chat.module.css';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    onSendMessage(input);
    setInput('');

    try {
      const response = await fetchEchoGPTResponse(input);
      const botMessage = response.choices[0].message.content; // Adjust based on the actual response structure
      onSendMessage(botMessage);
    } catch (error) {
      console.error('Error fetching EchoGPT response:', error);
    }
  };

  return (
    <div className={styles.chatInputContainer}>
      <textarea
        className={styles.chatInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
        placeholder="How can Echo help you today😊..."
      />
      <button
        className={styles.sendButton}
        onClick={handleSendMessage}
        disabled={input.trim() === ''}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;