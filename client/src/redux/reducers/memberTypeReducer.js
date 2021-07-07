import {
  ADD_MEMBERSHIP_TYPE_FAIL,
  ADD_MEMBERSHIP_TYPE_REQUEST,
  ADD_MEMBERSHIP_TYPE_SUCCESS,
  FETCH_MEMBERSHIP_TYPE_FAIL,
  FETCH_MEMBERSHIP_TYPE_REQUEST,
  FETCH_MEMBERSHIP_TYPE_SUCCESS,
  FETCH_MEMBER_TYPES_FAIL,
  FETCH_MEMBER_TYPES_REQUEST,
  FETCH_MEMBER_TYPES_SUCCESS,
} from '../constants/memberTypeConstant';

// fetch a single membership type reducer
export const fetchMemberTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEMBERSHIP_TYPE_REQUEST:
      return { loading: true };
    case FETCH_MEMBERSHIP_TYPE_SUCCESS:
      return { loading: false, memberType: action.payload };
    case FETCH_MEMBERSHIP_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// fetch all membership types reducer
export const fetchMembersTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEMBER_TYPES_REQUEST:
      return { loading: true };
    case FETCH_MEMBER_TYPES_SUCCESS:
      return { loading: false, memberTypesList: action.payload };
    case FETCH_MEMBER_TYPES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// add membership type reducer
export const addMemberTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MEMBERSHIP_TYPE_REQUEST:
      return { loading: true };
    case ADD_MEMBERSHIP_TYPE_SUCCESS:
      return {
        loading: false,
        membershipType: action.payload,
      };
    case ADD_MEMBERSHIP_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
