import React from 'react';
import './Modal.css'
import Modal from "react-bootstrap/Modal";
import { Button } from 'reactstrap';
import { useState } from 'react';
import useFetch from './database/data'

function ModalEdit(props) {
  const { data } = useFetch( 'http://localhost:5000/students' );
  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setNews(data[props.idx]);
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(news)
    
    setNews(vaults => ({
      ...vaults, 
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(false);

    fetch("http://localhost:5000/edit-student", {
            method: "PUT",
            body: JSON.stringify(news),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            })
            .then((response) => {
                if (response.status === 400) {
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
        <i class="fa-solid fa-pencil"></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
          <label>MSV: </label>
          <input
            type="text"
            name="msv"
            value={data && data[props.idx].msv}
            disabled = {true}
            onChange={handleInputChange}
          /><br/>
          <label>Họ Và Tên: </label>
          <input
            type="text"
            name="name"
            defaultValue={data &&data[props.idx].name}
            onChange={handleInputChange}
          /><br/>
          <label>Lớp Học: </label>
          <input
            type="text"
            name="class"
            defaultValue={data && data[props.idx].class}
            onChange={handleInputChange}
          /><br/>
          <label>Địa Chỉ: </label>
          <input
            type="text"
            name="address"
            defaultValue={data && data[props.idx].address}
            onChange={handleInputChange}
          /><br/>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
