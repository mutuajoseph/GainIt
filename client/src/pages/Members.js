import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import '../App.css'

const Members = () => {
  return (
    <Container>
      <Sidebar />
      <main className='main-content'>Members page</main>
    </Container>
  );
};

export default Members;

const Container = styled.div`
    display: flex;
`
