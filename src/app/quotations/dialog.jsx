'use client'
import { useState } from "react";
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Dialog() {
  const [show, setShow] = useState(false);// react hooks

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //BOM: Browser Object Model
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>Are you sure ?</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose} className="px-5">
            No
          </Button>
          <Button variant="danger">Yes</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Dialog;
