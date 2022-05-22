import * as React from 'react'
import './App.css';
import ModalEdit from "./ModalEdit";
import ModalCreate from "./ModalCreate";
import ModalDelete from "./ModalDelete";
import useFetch from './database/data'
// import axios from 'axios';

function App() {
  const { data } = useFetch( 'http://localhost:5000/students' );
  return (
    <div className="container">
      <div className="table">
          <ModalCreate 
          />
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>MSV</th>
              <th>Họ Tên</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((datas, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{datas.msv}</td>
                  <td>{datas.name}</td>
                  <td>
                    <ModalEdit idx={index}/>
                    <ModalDelete idx={index}/>
                  </td>
                </tr>
              )
            })}
           </tbody>
        </table>
      </div>
    </div>
  )
}
export default App;
