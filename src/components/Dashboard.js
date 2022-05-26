import React from "react";
import styled from 'styled-components';
import Employees from "./Dashboard/Employees";
import Clients from "./Dashboard/Client";
import Sidebar from "./Sidebar";

const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100vh;


  section {
    position: relative;
    height: 100vh;
    overflow: auto;
    width: 100%;
  }

  section::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    section {
      margin-top: 50px;
    }
  }
`

const Dashboard = ({navIsOpen, setNavIsOpen}) => {
  return (
    <Container>
      <Sidebar isOpen={navIsOpen} setIsOpen={setNavIsOpen} />
      <section>
        <Employees />
        <Clients />
      </section>
    </Container>
  );
};

export default Dashboard;
