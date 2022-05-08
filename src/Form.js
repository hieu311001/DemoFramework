import './Form.css';
import { useState } from 'react';
function Form() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = (e) => {
        //Chặn các event mặc định của form
        e.preventDefault();
     
       //Gọi hàm validationForm() dùng để kiểm tra form
        const validation = validationForm()
     
        //Kiểm tra lỗi của input trong form và hiển thị
        if (validation.error) {
          alert(validation.msg)
        }else{
          alert('Submit form success')
        }
      }

    const validationForm = () => {
        let returnData = {
          error : false,
          msg: ''
        }
        //Kiểm tra email
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
          returnData = {
            error: true,
            msg: 'Không đúng định dạng email'
          }
        }
        //Kiểm tra password
        if(password.length < 8) {
          returnData = {
            error: true,
            msg: 'Mật khẩu phải lớn hơn 8 ký tự'
          }
        }
        return returnData;
      }

    return (
      <form 
      onSubmit={e => {
        submitForm(e);
      }}
      >
        <div>
          <label htmlFor="username">Username: </label>
          <input
              type="text"
              value={email}
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={e => setPassword(e.target.value)}
            />
        </div>
        <button>Submit</button>
      </form>
    )
  }

  export default Form;