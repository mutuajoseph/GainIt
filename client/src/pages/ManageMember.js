import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import HeaderNav from '../components/HeaderNav';
import SubTable from '../components/SubTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleMember } from '../redux/actions/membersAction';

const ManageMember = ({ match }) => {
  // dispatch instance
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleMember(match.params.id));
  }, []);

  // get the member from state
  const { member } = useSelector((state) => state.singleMember);

  return (
    <Container>
      <Sidebar />
      <main className='main-content'>
        <HeaderNav />
        <SubHeader> Manage Member page</SubHeader>
        {member ? (
          <>
            <CardWrap>
              <CardInfo>
                {/* TODO: WRITE STYLES FOR THIS COLUMN */}
                Member Info
                <p>
                  Member ID: <span>{member.id_number}</span>
                </p>
                <p>
                  Member First Name: <span>{member.first_name}</span>
                </p>
                <p>
                  Member Last Name: <span>{member.last_name}</span>
                </p>
              </CardInfo>
              <CardTable>
                {/* TODO: FETCH MEMBER PYMENT HISTORY FROM API */}
                {/* <SubTable
                //   data={member.members}
                  text='Manage Member'
                  route='/member'
                //   headers={headers}
                /> */}
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

export default ManageMember;

const Container = styled.div`
  display: flex;
`;
const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardWrap = styled.div`
  /* border: 1px solid #111; */
  width: 1000px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: .4rem;
`;
const CardInfo = styled.div`
  flex: 4;
  border: 1px solid #111;
  padding: 1rem;
`;
const CardTable = styled.div`
  flex: 8;
  /* border: 1px solid #111; */
  padding: 0 1rem;
`;
const Loading = styled.div`
  width: 1000px;
`;

