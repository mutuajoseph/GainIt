import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// import reducers
import {adminLoginReducer} from './reducers/userReducer'

const reducer = combineReducers({
    adminLogin: adminLoginReducer
})

const adminInforFromStorage = localStorage.getItem('adminInfo')
? JSON.parse(localStorage.getItem('adminInfo'))
: null

const initialState = {
    adminLogin: { adminInfo: adminInforFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store