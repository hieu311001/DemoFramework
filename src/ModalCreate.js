import React from 'react';
import './Modal.css'
import Modal from "react-bootstrap/Modal";
import { Button } from 'reactstrap';
import { useState } from 'react';

function ModalCreate(props) {
  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    setNews(vaults => ({
      ...vaults, 
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(false);
    console.log(news)

    fetch("http://localhost:5000/add-student", {
            method: "POST",
            body: JSON.stringify(news),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            })
            .then((response) => {
                if (response.status === 401) {
                alert("Tên đăng nhập hoặc mật khẩu không đúng");
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
      <Button variant="primary" onClick={handleShow}>
        <i class="fa-solid fa-plus">
        </i>
      </Button>

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
            onChange={handleInputChange}
          /><br/>
          <label>Họ Và Tên: </label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
          /><br/>
          <label>Lớp Học: </label>
          <input
            type="text"
            name="class"
            onChange={handleInputChange}
          /><br/>
          <label>Địa Chỉ: </label>
          <input
            type="text"
            name="address"
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

export default ModalCreate;
