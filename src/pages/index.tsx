import React, { useState, useCallback } from 'react';
import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';
import Navbar from '../components/Navbar';
import GreetingHeader from '../components/GreetingHeader';
import WeatherUpdate from '../components/WeatherUpdate';
import TimeUpdate from '../components/TimeUpdate';
import CalendarComponent from '../components/Calendar';
import Notes from '../components/Notes';
import TaskList from '../components/TaskList';
import MindfulnessTips from '../components/MindfulnessTips';
import { fetchEchoGPTResponse } from '../utils/echogpt'; // Import the function here
import styles from '../styles/Chat.module.css';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return;

    const newMessage: Message = { id: Date.now(), content: message, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await fetchEchoGPTResponse(message);
      const botMessage: Message = { id: Date.now(), content: response.data, sender: 'bot' }; // Adjust based on the actual response structure
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error(error);
      alert(`Failed to send message: ${(error as Error).message}`);
    }
  }, []);

  return (
    <>
      <Navbar />
      <GreetingHeader />
      <div className={styles.mainContainer}>
        <div className={styles.sidebarLeft}>
          <WeatherUpdate />
          <CalendarComponent />
        </div>
        <div className={styles.chatContainer}>
          <ChatHistory messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
        <div className={styles.sidebarRight}>
          <TimeUpdate />
          <Notes />
          <TaskList />
          <MindfulnessTips />
        </div>
      </div>
    </>
  );
};

export default ChatPage;