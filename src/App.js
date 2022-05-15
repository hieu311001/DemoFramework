import * as React from 'react'
import './App.css';
import {useState, useEffect} from 'react';
import ModalEdit from "./ModalEdit";
import ModalCreate from "./ModalCreate";
import useModalEdit from './useModalEdit';
import useModalCreate from './useModalCreate';

function App() {
  const [data, setData] = useState();
  const {isShowingEdit, toggleEdit} = useModalEdit();
  const {isShowingCreate, toggleCreate} = useModalCreate();
  const [user, setUser] = useState();

  const handleEdit = (datas) => {
    toggleEdit(isShowingEdit);
    setUser(datas)
  }

  const handleCreate = () => {
    toggleCreate(isShowingCreate);
  }

  useEffect(() => {
    fetch('http://localhost:8000/data')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data);
    })
  }, [])
  
  return (
    <div className="container">
      <div className="table">
        <button className="add" onClick={handleCreate}><i class="fa-solid fa-plus"></i></button>
        <ModalCreate
          isShowing={isShowingCreate}
          hide={toggleCreate}
        />
        <table>
          <tr>
            <th>STT</th>
            <th>MSV</th>
            <th>Họ Tên</th>
            <th>Edit</th>
          </tr>
          {data && data.map((datas, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{datas.id}</td>
                <td>{datas.name}</td>
                <td>
                  <button id="edit" onClick={e => {
                    handleEdit(datas);
                  }}>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button id="delete"><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
            )
          })}
        </table>
        <ModalEdit
          isShowingEdit={isShowingEdit}
          hide={toggleEdit}
          user={user}
        />
      </div>
    </div>
  )
}
export default App;
