import React, { useState } from 'react';
import Modal from './parts/Modal';
import '../styles/ModalCustome.css'; // Import your CSS file for styling
import { Flex, Button,TextField,TextArea } from '@radix-ui/themes';


const ModalFormCustome = ({modalTitle, setMessage, setRefreshCalendar}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const [formData, setFormData] = useState({
    email:'',
    date:'',
    description:''
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange= (e) => {
    const { name, value} = e.target;
    setFormData({
        ...formData,
        [name]:value
    })
  }

  const handleSubmit  = async (e) =>{
    e.preventDefault();
    setIsLoading(true);
    try {
      const api_url = `${process.env.REACT_APP_API_URL}/send-email`;
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        });
        
        const data = await response.json();
        if(response.status === 200){
            setMessage({ type: 'success', text: data.message });
            alert(data.message);
            closeModal();
            // setRefreshCalendar(!refreshCalendar);
            setRefreshCalendar(true);
        }else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
        setMessage({ type: 'error', text: 'An error occurred while sending the email.' });
        alert('An error failed sending');
    } finally{
        setIsLoading(false);
    }
  }

  return (
    <div>
      <Button ml="5" className="open-modal-button" onClick={openModal}>
        {modalTitle}
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        <h3>Create </h3>
        <form onSubmit={handleSubmit}>
    
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <TextField.Root
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="form-label">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              format="YYYY-MM-DD"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <Flex justify="end">
          <Button type="submit" mb="5" className="submit-button"  loading={isLoading} >
         
            Send Email
          </Button>
          </Flex>
     
        </form>
      </Modal>
    </div>
  );
};

export default ModalFormCustome;