import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import SubTable from '../components/SubTable';
import '../App.css';
import HeaderNav from '../components/HeaderNav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmemberType } from '../redux/actions/memberTypeAction';

const headers = [
  {
    Header: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    accessor: 'last_name', // accessor is the "key" in the data
  },
  {
    Header: 'Phone Number',
    accessor: 'phone_number',
  },
];

const ManageMembership = ({ match }) => {
  // dispatch instance
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmemberType(match.params.id));
  }, []);

  // fetch membership type information
  const { memberType } = useSelector((state) => state.membershipType);

  return (
    <Container>
      <Sidebar />
      <main className='main-content'>
        <HeaderNav />
        <SubHeader>Manage Membership Type</SubHeader>
        {memberType ? (
          <>
            <CardWrap>
              <CardInfo>
                {/* TODO: WRITE STYLES FOR THIS COLUMN */}
                Membership Type Info
                <p>
                  Membership Name: <span>{memberType.name}</span>
                </p>
                <p>
                  Membership Description: <span>{memberType.description}</span>
                </p>
                <p>
                  Membership Fee: <span>{memberType.fee}</span>
                </p>
                {/* TODO: BUTTON TO ADD MEMBER TO MEMBERSHIP TYPE */}
              </CardInfo>
              <CardTable>
                {/* TODO: FETCH MEMBER FROM API */}
                <SubTable
                  data={memberType.members}
                  text='Manage Member'
                  route='/member'
                  headers={headers}
                />
              </CardTable>
            </CardWrap>
          </>
        ) : (
          <Loading> Getting Data</Loading>
        )}
      </main>
    </Container>
  );
};

export default ManageMembership;

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 0 auto;
`;
const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardWrap = styled.div`
  border: 1px solid #111;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
`;
const CardInfo = styled.div`
  flex: 4;
  border: 1px solid #111;
  padding: 1rem;
`;
const CardTable = styled.div`
  flex: 8;
  border: 1px solid #111;
  padding: 0 1rem;
`;
const Loading = styled.div`
  width: 1000px;
`;
