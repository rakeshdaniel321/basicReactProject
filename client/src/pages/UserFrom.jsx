import React, { useState } from 'react'

function UserFrom() {
    
    const[form,setForm]=useState({
        name:"",
        email:"",
        phone:"",
        city:"",
        password:""
    });
     const handleChange=(e)=>{
      const {name,value}=e.target;
      setForm({ ...form, [name]: value });
      console.log(form);
      const Data=JSON.stringify(form);
      console.log(Data);
     }
  return (
   <>
    <div>UserFrom</div>
    <input type='text'
      name="name"
      value={form.name}
      placeholder='enter your name'
      onChange={handleChange}
    />
     <input type='email'
      name="email"
      value={form.email}
      placeholder='enter your email'
      onChange={handleChange}
    />
     <input type='tell'
      name="phone"
      value={form.phone}
      placeholder='enter your phone'
      onChange={handleChange}
    />
     <input type='text'
      name="city"
      value={form.city}
      placeholder='enter your city'
      onChange={handleChange}
    />       

    <h1>Toogle Mood</h1>
    <button></button>                                                                           
   </>
  )
}
 
export default UserFrom