import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import '../styles/ModalForm.css'; // Import your CSS file for styling
import { Button } from '@radix-ui/themes';

const ModalForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="Button">Open Modal</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Modal Form</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Fill out the form below.
          </Dialog.Description>
          <form>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name
              </label>
              <input className="Input" id="name" defaultValue="John Doe" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="email">
                Email
              </label>
              <input className="Input" id="email" defaultValue="john.doe@example.com" />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button className="Button green">Save</button>
              </Dialog.Close>
            </div>
          </form>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <span aria-hidden>×</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalForm;