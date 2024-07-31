import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; 
import '../styles/Calenderku.css'; 

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting',
    start: new Date(2023, 3, 1, 10, 0),
    end: new Date(2023, 3, 1, 12, 0),
  },
  {
    title: 'Lunch',
    start: new Date(2023, 3, 1, 12, 0),
    end: new Date(2023, 3, 1, 13, 0),
  },
  // Add more events as needed
];

const MyCalendar = () => (
  <div className="calendar-container">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;