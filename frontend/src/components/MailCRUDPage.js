import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import ModalForm from './ModalCrudForm';
import { Container,Table, Button } from '@radix-ui/themes';

const MailCRUDPage = () => {
//   const history = useHistory();
  const [mails, setMails] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMail, setSelectedMail] = useState(null);

  useEffect(() => {
    fetchMails();
  }, []);

  const fetchMails = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/mails`);
      const data = await response.json();
      setMails(data);
    } catch (error) {
      console.error('Error fetching mails:', error);
    }
  };

  const handleAddSubmit = async (mail) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/mails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mail),
      });
      if (response.ok) {
        fetchMails();
        setModalIsOpen(false);
        setSelectedMail(null);
      } else {
        console.error('Error adding mail:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding mail:', error);
    }
  };

  const handleEditSubmit = async (mail) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/mails/${mail._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mail),
      });
      if (response.ok) {
        fetchMails();
        setModalIsOpen(false);
        setSelectedMail(null);
        alert(`Berhasil edit Email : ${mail.email}`)
      } else {
        console.error('Error updating mail:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating mail:', error);
    }
  };

  const handleDelete = async (mail) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/mails/${mail._id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchMails();
      } else {
        console.error('Error deleting mail:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting mail:', error);
    }
  };

  return (
    <div>
    <Container>
      <h1>Mail CRUD Page</h1>
      <Button mb="4" onClick={() => setModalIsOpen(true)}>Add Mail</Button>
      <ModalForm
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
          setSelectedMail(null);
        }}
        onSubmit={selectedMail ? handleEditSubmit : handleAddSubmit}
        mail={selectedMail}
      />


 
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.RowHeaderCell>Email</Table.RowHeaderCell>
            <Table.RowHeaderCell>Date</Table.RowHeaderCell>
            <Table.RowHeaderCell>Description</Table.RowHeaderCell>
            <Table.RowHeaderCell>Actions</Table.RowHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mails.map((mail) => (
            <Table.Row key={mail._id}>
              <Table.RowHeaderCell>{mail.email}</Table.RowHeaderCell>
              <Table.Cell>{new Date(mail.date).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{mail.description}</Table.Cell>
              <Table.Cell>
                <Button color="cyan" onClick={() => {
                  setSelectedMail(mail);
                  setModalIsOpen(true);
                }}>Edit</Button>
                <Button ml="2" onClick={() => handleDelete(mail)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      </Container>
      {/* <button onClick={() => history.push('/dashboard')}>Back to Dashboard</button> */}
    </div>
  );
};

export default MailCRUDPage;