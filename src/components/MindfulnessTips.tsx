import React, { useEffect, useState } from 'react';
import styles from '../styles/MindfulnessTips.module.css';

const tips = [
  "Take a deep breath and count to ten.",
  "Spend a few minutes focusing on your breath.",
  "Take a short walk and observe your surroundings.",
  "Practice gratitude by writing down three things you're thankful for.",
  "Take a break and stretch your body.",
  "Listen to calming music for a few minutes.",
  "Close your eyes and visualize a peaceful place.",
  "Practice mindful eating by savoring each bite of your meal.",
  "Spend a few minutes meditating.",
  "Write down your thoughts and feelings in a journal."
];

const MindfulnessTips: React.FC = () => {
  const [tip, setTip] = useState<string>('');

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  return (
    <div className={styles.tipContainer}>
      <h2>Inner Peace</h2>
      <p className={styles.tip}>{tip}</p>
    </div>
  );
};

export default MindfulnessTips;