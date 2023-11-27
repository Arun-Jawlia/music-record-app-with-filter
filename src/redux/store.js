
import { legacy_createStore,compose, applyMiddleware, combineReducers } from "redux";

import {reducer as authReducer} from './authReducer/reducer.js'
import {reducer as appReducer} from './appReducer/reducer.js'
import thunk from "redux-thunk";


const rootReducer = combineReducers({authReducer, appReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))