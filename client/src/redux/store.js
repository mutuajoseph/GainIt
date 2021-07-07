import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import { adminLoginReducer } from './reducers/userReducer';
import {
  fetchMembersTypeReducer,
  fetchMemberTypeReducer,
  addMemberTypeReducer
} from './reducers/memberTypeReducer';
import { addMemberReducer, fetchMembersReducer, fetchSingleMemberReducer } from './reducers/memberReducer';

const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  membershipTypes: fetchMembersTypeReducer,
  membershipType: fetchMemberTypeReducer,
  addMembership: addMemberTypeReducer,
  membersList:fetchMembersReducer,
  singleMember:fetchSingleMemberReducer,
  addMember:addMemberReducer
});

const adminInforFromStorage = localStorage.getItem('adminInfo')
  ? JSON.parse(localStorage.getItem('adminInfo'))
  : null;

const initialState = {
  adminLogin: { adminInfo: adminInforFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
