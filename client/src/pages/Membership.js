import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import '../App.css';
import HeaderNav from '../components/HeaderNav';

// dialog imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '../components/Table';
import {
  addMembershipType,
  fetchMemberTypes,
} from '../redux/actions/memberTypeAction';

const headers = [
  {
    Header: 'Membership Name',
    accessor: 'name',
  },
  {
    Header: 'Description',
    accessor: 'description', // accessor is the "key" in the data
  },
  {
    Header: 'Fee',
    accessor: 'fee',
  },
];

const Membership = () => {
  const [open, setOpen] = React.useState(false);
  const [membershipType, setMembershipType] = React.useState({
    name: '',
    description: '',
    fee: 0,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // handle form input change
  const handleChange = (e) => {
    setMembershipType({ ...membershipType, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form response', membershipType);
    dispatch(addMembershipType(membershipType));

    setOpen(false);
    setMembershipType({
      name: '',
      description: '',
      fee: '',
    });
  };

  // dispatch instance
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemberTypes());
  }, [dispatch]);

  // useSelector instance to fetch data from state
  const { memberTypesList } = useSelector((state) => state.membershipTypes);

  return (
    <Container>
      <Sidebar />
      <main className='main-content'>
        <HeaderNav />
        <SubHeader>
          <h5>Membership page</h5>
          <Button
            style={{
              outline: 'none',
              background: '#b10f2e',
              color: '#fff',
              fontSize: '12px',
            }}
            color='primary'
            onClick={handleClickOpen}
            size='small'
          >
            Add Membership
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>
              {'Add new Instructor'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                <form>
                  <FormGroup>
                    <label>MemberShip Name</label>
                    <input
                      type='text'
                      placeholder='Enter membership name'
                      name='name'
                      value={membershipType.name}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Description</label>
                    <input
                      type='text'
                      placeholder='Enter description'
                      name='description'
                      value={membershipType.description}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Fee</label>
                    <input
                      type='number'
                      placeholder='Enter fee amount'
                      name='fee'
                      value={membershipType.fee}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleSubmit}
                color='primary'
                style={{ outline: 'none' }}
              >
                Save
              </Button>
              <Button
                onClick={handleClose}
                color='primary'
                autoFocus
                style={{ outline: 'none' }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </SubHeader>
        {memberTypesList && (
          <Table
            data={memberTypesList}
            text='Manage Membership'
            route='/membership'
            headers={headers}
          />
        )}
      </main>
    </Container>
  );
};

export default Membership;

const Container = styled.div`
  display: flex;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  > label {
    margin-bottom: 0.4rem;
    font-weight: 600;
    font-size: 12px;
  }

  > input {
    padding: 0.4rem;
    border-radius: 4px;
    border: #ccc5b980 1px solid;
    outline: none;
    font-size: 14px;
    width: 350px;
  }

  > input::placeholder {
    color: #84848490;
  }
`;
