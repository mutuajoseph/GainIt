import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from '../constants/userConstant';
import GAINIT_URL from '../api';
import {history} from '../../utils/history'

export const adminlogin = (userdetails) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    });

    let bodyFormData = new FormData();

    bodyFormData.append('username', userdetails.email);
    bodyFormData.append('password', userdetails.password);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await GAINIT_URL.post(
      `/users/login`,
      bodyFormData,
      config
    );

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });

    console.log('login response', data);
    localStorage.setItem("adminInfo", JSON.stringify(data))
    history.push('/')
  } catch (err) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};

// logout 
export const adminLogOut = () => async dispatch => {
    dispatch({
      type: ADMIN_LOGOUT
    })
    // empty the localStorage
    localStorage.clear()
    // redirect to login
    history.push('/login')
}