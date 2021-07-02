import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiSpa } from 'react-icons/all';
import { adminlogin } from '../redux/actions/userAction';
import {CircularProgress} from '@material-ui/core'
import Message from '../components/Message';

const Auth = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  // dispatch 
  const dispatch = useDispatch()

  const adminLogin = useSelector(state => state.adminLogin)
  const { loading, error} = adminLogin

  const handleChange = (e) => {
    setCredentials({...credentials,[e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(adminlogin(credentials))
    setCredentials({
      email: '',
      password: ''
    })
  };

  return (
    <div>
      <Header>
        <BiSpa style={{ fontSize: '2rem', color: '#b10f2e' }} />
        <h2>GainIT</h2>
      </Header>
      <Card>
        {/* Login Header */}
        <h2>Login to Account</h2>
        {error && <Message message={error} variant="error"/>}
        {/* form */}
        <form>
          <FormGroup>
            <label>Email Address</label>
            <input
              type='email'
              placeholder='Enter your email address'
              name='email'
              value={credentials.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormActions>
            {loading && 
              <Loader>
                <CircularProgress size={24} color="secondary" />
              </Loader>
             }
            <button onClick={login} disabled={loading}>Login</button>
            <FormLink to='/reset-password'>forgot password?</FormLink>
          </FormActions>
        </form>
      </Card>
    </div>
  );
};

export default Auth;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  > h2 {
    margin-left: 4px;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const Card = styled.div`
  max-width: 350px;
  padding: 0.8rem 1.2rem;
  /* border: 1px solid #111; */
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  > h2 {
    font-size: 1.4rem;
    font-weight: 700;
  }
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
  }

  > input::placeholder {
    color: #84848490;
  }
`;

const FormActions = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    padding: 0.4rem 0;
    margin: 0.6rem 0;
    background-color: #b10f2e;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 4px;
    transition: all ease 0.1s
  }

  > button:hover {
    background-color: #a4161a;
    transition: all ease 0.1s
  }
`;

const FormLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`