import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const ModalCreate = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <form>
      <label>MSV: </label>
      <input
        type="text"
      /><br/>
      <label>Họ Và Tên: </label>
      <input
        type="text"
      /><br/>
      <label>Lớp Học: </label>
      <input
        type="text"
      /><br/>
      <label>Địa Chỉ: </label>
      <input
        type="text"
      /><br/>
      <button>OK</button>
    </form>
  </React.Fragment>, document.body
) : null;

export default ModalCreate;
