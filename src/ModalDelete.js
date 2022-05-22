import React from 'react';
import './Modal.css'
import Modal from "react-bootstrap/Modal";
import { Button } from 'reactstrap';
import { useState } from 'react';
import useFetch from './database/data'

function ModalDelete(props) {
  const { data } = useFetch( 'http://localhost:5000/students' );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(false);

    fetch("http://localhost:5000/delete-student", {
            method: "DELETE",
            body: JSON.stringify(data[props.idx]),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            })
            .then((response) => {
                if (response.status === 401) {
                alert("Error");
                } else {
                    return response.json();
                }
            })
            .then((res) => {
                console.log(res);
            });
  };

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Are you sure delete?</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDelete;
