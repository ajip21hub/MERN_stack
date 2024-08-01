import React, {useState, useEffect}from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; 
import '../styles/Calenderku.css'; 

const localizer = momentLocalizer(moment);





const MyCalendar = ({onSelectEvent}) => {

  const [mails, setMails] = useState([]);

  useEffect(() => {
    fetchMails();
  }, []);

  const fetchMails = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/mails`);
      const mails = await response.json();
      const mail = mails.map(mail => ({
        title: mail.email,
        start: new Date(mail.date),
        end: new Date(mail.date),
      }));
      setMails(mail);
    } catch (error) {
      console.error('Error fetching mails:', error);
    }
  };


  return (
  <div className="calendar-container">
    <Calendar
      localizer={localizer}
      events={mails}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={onSelectEvent}
      style={{ height: 500 }}
    />
  </div>
  )
};

export default MyCalendar;