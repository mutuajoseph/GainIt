import GAINIT_URL from '../api';
import {
  FETCH_MEMBERSHIP_TYPE_FAIL,
  FETCH_MEMBERSHIP_TYPE_REQUEST,
  FETCH_MEMBERSHIP_TYPE_SUCCESS,
  FETCH_MEMBER_TYPES_FAIL,
  FETCH_MEMBER_TYPES_REQUEST,
  FETCH_MEMBER_TYPES_SUCCESS,
} from '../constants/memberTypeConstant';


// fetch a single mebership type
export const fetchmemberType = memberTypeId => async dispatch => {
  try {
    
    dispatch({
      type: FETCH_MEMBERSHIP_TYPE_REQUEST
    })

    const { data } = await GAINIT_URL.get(`/member_types/${memberTypeId}`)

    dispatch({
      type: FETCH_MEMBERSHIP_TYPE_SUCCESS,
      payload: data
    })
    console.log("member type response", data)
  } catch (err) {
    dispatch({
      type: FETCH_MEMBERSHIP_TYPE_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    })

    console.log(err)
  }
}

// fetch all membership types
export const fetchMemberTypes = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_MEMBER_TYPES_REQUEST,
    });

    const { data } = await GAINIT_URL.get(`/member_types`);

    dispatch({
      type: FETCH_MEMBER_TYPES_SUCCESS,
      payload: data,
    });

    console.log('fetch member types response', data);
  } catch (err) {
    dispatch({
      type: FETCH_MEMBER_TYPES_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
    console.log(err)
  }
};

// add membership type action
export const addMembershipType = membershipDetails => async dispatch => {
  try {
    
    dispatch({
      type: FETCH_MEMBER_TYPES_REQUEST
    })

    const { data } = await GAINIT_URL.post(`/member_types`, membershipDetails)

    dispatch({
      type: FETCH_MEMBER_TYPES_SUCCESS,
      payload: data
    })
    console.log("add membership type response", data)

  } catch (err) {
    dispatch({
      type: FETCH_MEMBER_TYPES_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    })
    console.log(err)
  }
}