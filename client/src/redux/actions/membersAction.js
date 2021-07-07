import GAINIT_URL from '../api';
import {
  ADD_MEMBER_FAIL,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  FETCH_ALL_MEMBERS_FAIL,
  FETCH_ALL_MEMBERS_REQUEST,
  FETCH_ALL_MEMBERS_SUCCESS,
  FETCH_SINGLE_MEMBER_FAIL,
  FETCH_SINGLE_MEMBER_REQUEST,
  FETCH_SINGLE_MEMBER_SUCCESS,
} from '../constants/memberConstants';

// fetch all members
export const fetchAllMembers = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_ALL_MEMBERS_REQUEST,
    });

    const { data } = await GAINIT_URL.get(`/members`);

    dispatch({
      type: FETCH_ALL_MEMBERS_SUCCESS,
      payload: data,
    });

    console.log('fetchallmembersresponse', data);
  } catch (err) {
    dispatch({
      type: FETCH_ALL_MEMBERS_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });

    console.log(err);
  }
};

// fettch a single member

export const fetchSingleMember = (memberId) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_SINGLE_MEMBER_REQUEST,
    });

    const { data } = await GAINIT_URL.get(`/members/${memberId}`);

    dispatch({
      type: FETCH_SINGLE_MEMBER_SUCCESS,
      payload: data,
    });

    console.log('fetch single response', data);
  } catch (err) {
    dispatch({
      type: FETCH_SINGLE_MEMBER_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};

// add new member
export const addNewMember = (memberDetails) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_MEMBER_REQUEST,
    });

    const { data } = await GAINIT_URL.post(`/members`, memberDetails);

    dispatch({
      type: ADD_MEMBER_SUCCESS,
      payload: data,
    });

    console.log('addmember reponse', data);
    dispatch(fetchAllMembers())
  } catch (err) {
    dispatch({
      type: ADD_MEMBER_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};
