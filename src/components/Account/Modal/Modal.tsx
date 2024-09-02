import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import './Modal.scss';

function ModalEditProfil() {

    const client = {firstname: "John", lastname: "Doe", email: "test", address: "test", phone: "test"};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Edit profile
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder={client.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFirstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder={client.firstname} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder={client.lastname} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formformAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder={client.address} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formformPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder={client.phone} />
            </Form.Group>
       </Form> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditProfil;