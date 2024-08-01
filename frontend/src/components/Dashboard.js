import React,{useState,useCallback, useContext} from 'react';
// import ModalForm from './ModalForm';
import ModalFormCustome from './ModalFormCustome';
import { Flex,Container } from '@radix-ui/themes';
import MyCalendar from './Calenderku';
import { AuthContext } from '../context/AuthContext';


const Dashboard = () => {
    const customModal = "Create";
    const {email} = useContext(AuthContext);
    const [message, setMessage] = useState(null);
    const [refreshCalendar, setRefreshCalendar] = useState(false);


    const handleSelectEvent = useCallback(
      (event) => window.alert(event.title),
      []
    )

  return (
    <div>
        <Container mt="5">
        <Flex justify="end" align="center">
        {/* <ModalForm/> */}
        <h4>Welcome:  { email }</h4>
        <ModalFormCustome modalTitle={customModal} setMessage={setMessage} setRefreshCalendar={setRefreshCalendar}  />
        </Flex>

        {message && <div className={`message ${message.type}`}>{message.text}</div>}
      
        <h1>Big Calendar </h1>
 
        <MyCalendar  key={refreshCalendar} onSelectEvent={handleSelectEvent}/>
       
        </Container>
 
     
     <Flex justify="center">
        <b>@created by Aji Pangestu</b>
    </Flex>

    </div>
  );
};

export default Dashboard;