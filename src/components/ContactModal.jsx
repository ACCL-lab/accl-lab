import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-start mb-3">
          <FaEnvelope className="me-3 mt-1 text-primary" />
          <div>
            <h6>Email</h6>
            <p className="mb-1">
              <a href="mailto:vishwesh@iitbhilai.ac.in" className="text-decoration-none">
                vishwesh@iitbhilai.ac.in
              </a>
            </p>
          </div>
        </div>

        <div className="d-flex align-items-start">
          <FaMapMarkerAlt className="me-3 mt-1 text-danger" />
          <div>
            <h6>Address</h6>
            <p className="mb-0">
              Room No - 401 A <br />
              Department of CSE<br />
              Engineering Building-1<br />
              IIT Bhilai,Kutelabhata, Durg, Chhattisgarh - 491001
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
