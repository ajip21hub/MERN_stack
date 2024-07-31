import React,{useState} from 'react';
// import ModalForm from './ModalForm';
import ModalFormCustome from './ModalFormCustome';
import { Flex,Container } from '@radix-ui/themes';
import MyCalendar from './Calenderku';


const Dashboard = () => {
    const customModal = "Create";
    const [message, setMessage] = useState(null);

  return (
    <div>
        <Container mt="5">
        <Flex justify="end">
        {/* <ModalForm/> */}
        <ModalFormCustome modalTitle={customModal} setMessage={setMessage} />
        </Flex>

        {message && <div className={`message ${message.type}`}>{message.text}</div>}
        <h1>Big Calendar</h1>
 
        <MyCalendar />
       
        </Container>
 
     
     <Flex justify="center">
        <b>@created by Aji Pangestu</b>
    </Flex>

    </div>
  );
};

export default Dashboard;