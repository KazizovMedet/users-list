import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import UserPage from "./pages/Users-page";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "./redux/action/UserAction";
import Cookies from "js-cookie";
import {isAuth, isPrivate} from "./lib/helper";


const App = () => {
  const isAuthenticated = useSelector(state => state.userReducer.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth()){
      dispatch({type: 'SET_AUTH'})
    }
  },[isAuth()])

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/sign-in'} element={<SignIn />}/>
        <Route path={'/sign-up'} element={<SignUp />}/>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/'} element={
          <PrivateRoute auth={{isAuthenticated: isAuthenticated}}>
            <UserPage />
          </PrivateRoute>
        } />
      </Routes>
    </>
  );
};

export default App;