import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import { adminLoginReducer } from './reducers/userReducer';
import {
  fetchMembersTypeReducer,
  fetchMemberTypeReducer,
} from './reducers/memberTypeReducer';

const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  membershipTypes: fetchMembersTypeReducer,
  membershipType: fetchMemberTypeReducer,
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
