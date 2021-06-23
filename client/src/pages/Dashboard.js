import React from 'react';
import Sidebar from '../components/Sidebar';
import '../App.css';
import styled from 'styled-components';
import {ImUsers} from 'react-icons/all'
import HeaderNav from '../components/HeaderNav';

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <main className='main-content'>
        <HeaderNav />
        <Row>
          <Col>
            <Card>
              <div>
                <h5>$100k</h5>
                <p>Lorem Ipsum</p>
              </div>
              <ImUsers className="large-icon"/>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <h5>$100k</h5>
                <p>Lorem Ipsum</p>
              </div>
              <ImUsers className="large-icon"/>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <h5>$100k</h5>
                <p>Lorem Ipsum</p>
              </div>
              <ImUsers className="large-icon"/>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <h5>$100k</h5>
                <p>Lorem Ipsum</p>
              </div>
              <ImUsers className="large-icon"/>
            </Card>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
`;
const Row = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Col = styled.div`
  /* border: 1px solid #111; */
  padding: 0.5rem;
`;

const Card = styled.div`
  /* border: 1px solid #111; */
  width: 240px;
  height: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: .4rem .8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div > h5 {
      font-weight: 700;
  }

  > div > p {
      color: #848484;
  }
`;
