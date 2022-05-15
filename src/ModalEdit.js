import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const ModalEdit = ({ isShowingEdit, hide, user }) => isShowingEdit ? ReactDOM.createPortal(
  <React.Fragment>
    <form>
      <label>MSV: </label>
      <input
        type="text"
        value={user.id}
      /><br/>
      <label>Họ Và Tên: </label>
      <input
        type="text"
        value={user.name}
      /><br/>
      <label>Lớp Học: </label>
      <input
        type="text"
        value={user.class}
      /><br/>
      <label>Địa Chỉ: </label>
      <input
        type="text"
        value={user.address}
      /><br/>
      <button>Update</button>
      <button>OK</button>
    </form>
  </React.Fragment>, document.body
) : null;

export default ModalEdit;
