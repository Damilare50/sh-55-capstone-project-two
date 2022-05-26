import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
`

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;

  form {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    border-radius: 20px;
    border: 2px solid purple;
    height: max-content;

    h1 {
      font-weight: 700;
      font-size: 18px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid purple;
    }

    label {
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      width: 450px;
      background-color: lightblue;
      outline-color: purple;
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
    margin: 15% 5px auto 5px;
    width: 100%;
    form {
      width: 100%;
      margin-top: 40px;

      input {
        width: inherit;
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
    window.location = '/dashboard'
  }



  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up.</h1>
          <label htmlFor="userEmail">Email:</label>
          <input className='' type="email" name="userEmail" id="userEmail" onChange={handleChange} />
          <label htmlFor="userPassword">Password:</label>
          <input className='' type="password" name="userPassword" id="userPassword" onChange={handleChange} />
          <button className={isError ? 'bg-blue-700 disabler' : 'bg-blue-700'} type='submit'>Sign In</button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default Login;