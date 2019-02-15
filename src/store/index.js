import {createStore, applyMiddleware} from "redux"
import {combineReducers} from "redux-immutable"
import reduxPromiseMiddleware from "redux-promise-middleware"
const reducers = combineReducers({

})

const store = createStore(reducers, applyMiddleware(reduxPromiseMiddleware));

export default store;