import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./reducer/UserReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    userReducer: userReducer
  }),
  composeWithDevTools(applyMiddleware(thunk)
  )
)
export default store