import React from 'react';
import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import {isAuth} from "../lib/helper";
import {logOutUser} from "../redux/action/UserAction";

const Header = () => {
  const user = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOutUser())
  }

  return (
    <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <h3>Logo</h3>
      <nav style={{display: 'flex', gap: '20px'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </nav>
      { isAuth() ?
        <Box>
          <Typography>{user?.name}</Typography>
          <Button onClick={handleLogout}>Log out</Button>
        </Box>
        :
        <Box sx={{display: 'flex', gap: '15px'}}>
          <Button variant={'contained'} color={'secondary'}>
            <Link to={'/sign-up'} style={{color: '#fff'}}>Sign up</Link>
          </Button>
          <Button variant={'contained'} color={'secondary'}>
            <Link to={'/sign-in'} style={{color: '#fff'}}>Sign in</Link>
          </Button>
        </Box>
      }
    </header>
  );
};

export default Header;