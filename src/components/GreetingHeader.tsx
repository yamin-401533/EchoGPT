import React from 'react';
import styles from '../styles/GreetingHeader.module.css';

const GreetingHeader: React.FC = () => {
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good morning';
    if (hours < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getPrayerTimes = () => {
    return {
      fajr: '5:00 AM',
      dhuhr: '1:00 PM',
      asr: '4:30 PM',
      maghrib: '6:00 PM',
      isha: '7:30 PM',
    };
  };

  const getCustomMessage = () => {
    const hours = new Date().getHours();
    const prayerTimes = getPrayerTimes();

    if (hours < 12) return `Start your day with a positive thought! Next prayer: Fajr at ${prayerTimes.fajr}`;
    if (hours < 13) return `It's time for Dhuhr prayer at ${prayerTimes.dhuhr}. Keep pushing through your afternoon!`;
    if (hours < 16) return `Next prayer: Asr at ${prayerTimes.asr}. Keep pushing through your afternoon!`;
    if (hours < 18) return `It's time for Asr prayer at ${prayerTimes.asr}. Keep pushing through your afternoon!`;
    if (hours < 19) return `Next prayer: Maghrib at ${prayerTimes.maghrib}. Wind down and relax for the evening!`;
    if (hours < 20) return `It's time for Maghrib prayer at ${prayerTimes.maghrib}. Wind down and relax for the evening!`;
    return `Next prayer: Isha at ${prayerTimes.isha}. Wind down and relax for the evening!`;
  };

  const prayerTimes = getPrayerTimes();

  return (
    <div className={styles.greetingHeader}>
      <h1>{getGreeting()}, the beautiful mind!</h1>
      <p>{getCustomMessage()}</p>
      
    </div>
  );
};

export default GreetingHeader;