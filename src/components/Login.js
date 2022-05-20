import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 600;

    label {
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      width: 450px;
      background-color: lightblue;
      outline-color: #1e3a8a;
      border-radius: 8px;
      margin-bottom: 30px;
    }

    button {
    padding: 18px 36px;
    width: 150px;
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    }

    .disabler {
      pointer-events: none;
    }
  }

  @media screen and (max-width: 500px) {
    form {

      input {
      width: 280px;
      }
    }
    
  }
`

const Login = () => {
  const [ isError , setIsError ] = useState(false);
  const [ loginData, setLoginData ] = useState({
    userEmail: "",
    userPassword: "" 
  })

  const handleChange = (e) => {
    let name = e.target.name 
    let value =e.target.value

    setLoginData({
      ...loginData,
      [name]: value
    })
    // console.log(loginData)
  }

  useEffect(() => {
    if (loginData.userEmail === "" || loginData.userPassword === "") {
      setIsError(true)
    } else {
      setIsError(false)
    }

    
  }, [loginData])

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem('current_user', JSON.stringify(loginData));
    window.location = '/products'
  }



  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userEmail">Email:</label>
        <input className='' type="email" name="userEmail" id="userEmail" onChange={handleChange} />
        <label htmlFor="userPassword">Password:</label>
        <input className='' type="password" name="userPassword" id="userPassword" onChange={handleChange} />
        <button className={isError ? 'bg-blue-700 disabler' : 'bg-blue-700'} type='submit'>Sign In</button>
      </form>
    </Wrapper>
  )
}

export default Login;