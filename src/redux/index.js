import myReducer from "./ reducer";
import {applyMiddleware, createStore} from 'redux'
import reduxThunk from 'redux-thunk'

let store = createStore(myReducer,applyMiddleware(reduxThunk));

export default store;
