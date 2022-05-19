import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
  display: flex;
  align-content: end;
  justify-content: end;
  margin-right: auto;
  padding: 15px 30px;

  .link {
    font-size: 16px;
    font-weight: 500;
    padding: 15px 30px;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }

  button {
    padding: 15px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 500;
  }
`

const Nav = () => {

  const handleLogout = () => {
    if (sessionStorage.length > 0) {
      sessionStorage.removeItem('current_user')

      alert('Logged out successfully!')
      window.location = '/'
    } else {
      alert('No user logged in!')
    }
  }

  return (
    <Wrapper>
      <Link className='link bg-blue-700' to="/">Home</Link>
      <button className='bg-blue-700' onClick={handleLogout}>Logout</button>
    </Wrapper>
  )
}

export default Nav;