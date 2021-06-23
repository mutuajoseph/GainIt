import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import '../App.css';
import HeaderNav from '../components/HeaderNav';

// dialog imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Instructors = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Sidebar />
      <main className='main-content'>
        <HeaderNav />
        <SubHeader>
          <h5>Instructors page</h5>
          <Button style={{outline: 'none', background: '#b10f2e', color: '#fff'}} color='primary' onClick={handleClickOpen}>
            Add Instructor
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>
              {"Add new Instructor"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Put form here
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Save
              </Button>
              <Button onClick={handleClose} color='primary' autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </SubHeader>
        <Table />
      </main>
    </Container>
  );
};

export default Instructors;

const Container = styled.div`
  display: flex;
`;
const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`