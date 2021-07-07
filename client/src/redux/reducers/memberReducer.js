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

// fetch all members reducer
export const fetchMembersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_MEMBERS_REQUEST:
      return { loading: true };
    case FETCH_ALL_MEMBERS_SUCCESS:
      return { loading: false, members: action.payload };
    case FETCH_ALL_MEMBERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// fetch a single member
export const fetchSingleMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SINGLE_MEMBER_REQUEST:
      return { loading: true };
    case FETCH_SINGLE_MEMBER_SUCCESS:
      return { loading: false, member: action.payload };
    case FETCH_SINGLE_MEMBER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// create new member
export const addMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MEMBER_REQUEST:
      return { loading: true };
    case ADD_MEMBER_SUCCESS:
      return { loading: false, newMember: action.payload };
    case ADD_MEMBER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
