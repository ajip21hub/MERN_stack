import React from "react";
import '../../styles/ModalCustome.css'
import { Button } from "@radix-ui/themes";

const Modal = ({ isOpen, onClose, children})=>{

    if(!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <Button className="modal-close" onClick={onClose}>
                    &times;
                </Button>
                {children}
            </div>
        </div>
    );

};

export default Modal;