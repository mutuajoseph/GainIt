import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import '../App.css';
import HeaderNav from '../components/HeaderNav';
import Table from '../components/Table';

// dialog imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMember, fetchAllMembers } from '../redux/actions/membersAction';

const headers = [
  {
    Header: 'ID Number',
    accessor: 'id_number',
  },
  {
    Header: 'First Name',
    accessor: 'first_name', // accessor is the "key" in the data
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Phone Number',
    accessor: 'phone_number',
  },
];

const Members = () => {
  const [open, setOpen] = React.useState(false);
  const [member, setMember] = React.useState({
    id_number: 0,
    first_name: "",
    last_name: "",
    phone_number: ""
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setMember({...member, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addNewMember(member))
    setMember({
      id_number: 0,
      first_name: "",
      last_name: "",
      phone_number: ""
    })
    setOpen(false)
  }

  // dispatch instance
  const dispatch = useDispatch();

  // fetch all members on component render
  useEffect(() => {
    dispatch(fetchAllMembers());
  }, [dispatch]);

  // get members list from state
  const { members } = useSelector((state) => state.membersList);

  return (
    <Container>
      <Sidebar />
      <main className='main-content'>
        <HeaderNav />
        <SubHeader>
          <h5>Members page</h5>
          <Button
            style={{ outline: 'none', background: '#b10f2e', color: '#fff', fontSize: '12px', }}
            color='primary'
            onClick={handleClickOpen}
            size='small'
          >
            Add Member
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
                    <label>ID Number</label>
                    <input
                      type='number'
                      placeholder='Enter Id Number'
                      name='id_number'
                      value={member.id_number}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>First Name</label>
                    <input
                      type='text'
                      placeholder='Enter first name'
                      name='first_name'
                      value={member.first_name}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Last Name</label>
                    <input
                      type='text'
                      placeholder='Enter last name'
                      name='last_name'
                      value={member.last_name}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Phone Number</label>
                    <input
                      type='text'
                      placeholder='Enter phone number'
                      name='phone_number'
                      value={member.phone_number}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSubmit} color='primary'>
                Save
              </Button>
              <Button onClick={handleClose} color='primary' autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </SubHeader>
        {members && (
          <Table
            data={members}
            headers={headers}
            text='Manage Member'
            route='/member'
          />
        )}
      </main>
    </Container>
  );
};

export default Members;

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
