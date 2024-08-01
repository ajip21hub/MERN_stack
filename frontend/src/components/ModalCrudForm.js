import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Theme, TextField } from '@radix-ui/themes';

const ModalCrudForm = ({ isOpen, onRequestClose, onSubmit, mail = {} }) => {
  const [email, setEmail] = useState(mail ? mail.email || '' : '');
  const [date, setDate] = useState(mail ? (mail.date ? new Date(mail.date).toISOString().split('T')[0] : '') : '');
  const [description, setDescription] = useState(mail ? mail.description || '' : '');

  useEffect(() => {
    setEmail(mail ? mail.email || '' : '');
    setDate(mail ? (mail.date ? new Date(mail.date).toISOString().split('T')[0] : '') : '');
    setDescription(mail ? mail.description || '' : '');
  }, [mail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...mail, email, date, description });
    setEmail('');
    setDate('');
    setDescription('');
  };

  return (
    <Theme>
      <Dialog.Root open={isOpen} onOpenChange={onRequestClose}>
        <Dialog.Overlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex:1000 }} />
        <Dialog.Content style={{ width: '300px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex:1001 }}>
          <Dialog.Title>{mail ? 'Edit Mail' : 'Add Mail'}</Dialog.Title>
          <Dialog.Description>
          {mail ? 'CRUD Edit Mail' : 'CRUD Add Mail'}
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <TextField.Root
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <div>
              <label>Date:</label>
              <TextField.Root
               
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <div>
              <label>Description:</label>
              <TextField.Root
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <button type="submit" style={{ padding: '8px 16px', margin: '8px 0', borderRadius: '4px', border: 'none', backgroundColor: '#0070f3', color: '#fff' }}>
              {mail ? 'Update' : 'Submit'}
            </button>
            <button type="button" onClick={onRequestClose} style={{ padding: '8px 16px', margin: '8px 0', borderRadius: '4px', border: 'none', backgroundColor: '#ccc', color: '#000' }}>
              Cancel
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </Theme>
  );
};

export default ModalCrudForm;