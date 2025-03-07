import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../styles/Calendar.module.css';

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Date | [Date, Date] | null>(new Date());

  const handleDateChange = (value: Date | [Date, Date] | null) => {
    setDate(value);
  };

  return (
    <div className={styles.calendar}>
      <h2>Daily Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <p>Upcoming Events:</p>
      <ul>
        <li>Meeting with team at 10:00 AM</li>
        <li>Lunch with client at 1:00 PM</li>
        <li>Project deadline at 5:00 PM</li>
      </ul>
    </div>
  );
};

export default CalendarComponent;