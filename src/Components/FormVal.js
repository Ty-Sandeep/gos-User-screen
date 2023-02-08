import React, { useEffect, useState } from 'react'
import  './Form.css'

function FormVal() {
    const  initialState={
        UserName: "",
        Email: "",
        Password: ""
    }
    const [formValue, setformValue] = useState(initialState);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    

    const handleChange=(e)=>{
        const {name, value}= e.target;
        setformValue({...formValue, [name]: value});
    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validation(formValue));
        setisSubmit(true);
      };

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValue);
        }
    }, [formErrors])

    const validation=(value)=>{
        const errors={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!value.UserName){
            errors.UserName = "User Name Is Required !";
        }else if (value.UserName.length < 3){
            errors.UserName = "User Name too Sort.";
        }
        if(!value.Email){
            errors.Email = "Email Is Required !";
        }else if(!regex.test(value.Email)){
            errors.Email = "Email Is Not Valide !";
        }
        if(!value.Password){
            errors.Password = "Password Is Required !";
        }else if(value.Password.length < 4){
            errors.Password = "Password Should Not less rhen 4 !";
        }else if(value.Password.length > 10){
            errors.Password = "Password should not greter then 10 !";
        }
        return errors;
    };
  return (
    <div className="container">
         {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label className='lable-name'>Username</label>
            <input
              type="text"
              name="UserName"
              placeholder="Username"
              value={formValue.UserName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.UserName}</p>
          <div className="field">
            <label className='lable-name'>Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={formValue.Email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Email}</p>
          <div className="field">
            <label className='lable-name'>Password</label>
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={formValue.Password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FormVal
