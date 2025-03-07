import React from 'react';
import styles from '../styles/TimeUpdate.module.css';

const TimeUpdate: React.FC = () => {
  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  const dateString = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className={`${styles.timeUpdate} ${styles.animate}`}>
      <h2>{dayName}</h2>
      <p>{timeString}</p>
      <div className={styles.dateDisplay}>{dateString}</div>
    </div>
  );
};

export default TimeUpdate;