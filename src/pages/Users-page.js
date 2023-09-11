import React, {useEffect} from 'react';
import {
  Alert,
  Box, Button,
   Modal, Snackbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CreateUserForm from "../components/Create-user-form";
import TableList from "../components/TableList";
import {addUser, getUsers, updateUser} from "../redux/action/UserAction";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {isAuth} from "../lib/helper";


const UserPage = () => {
  const dispatch = useDispatch()
  const {users : userReducer, error, isOpenAlert} = useSelector(state => state.userReducer)
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({})
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth()){
      navigate('/sign-in')
    }
  },[isAuth()])
  useEffect(() => {
    dispatch(getUsers())
  },[])

  const handeSubmit = (values) => {
   dispatch(addUser(values))
  }

  const handleUpdate = (values) => {
    dispatch(updateUser(values))
    handleClose()
  }

  const handleEdit = (values) => {
    setOpen(true)
    setUser(values)
  }
  const handleClose = () => {
    setOpen(false);
    setUser({})
  }

  const handleCloseAlert = () => {
    dispatch({type: 'CLOSE_ERROR'})
    dispatch({type: 'CLOSE_ALERT'})
  }

  return (
    <Box
      className={'container'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px'
      }}
    >
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right' }}
        open={(error || isOpenAlert)}
        onClose={handleCloseAlert}
        autoHideDuration={2000}
      >
        { (isOpenAlert || error) &&
          <Alert onClose={handleCloseAlert} severity={ isOpenAlert ? 'success' : 'error' }>
            {error ? 'Request failed' : 'Success! User saved!'}
          </Alert>
        }
      </Snackbar>
      <Typography variant={'h2'}>
        Hello World
      </Typography>
      <Button onClick={() => setOpen(true)}>Create user</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            variant={'contained'}
            color={'error'}
            sx={{mb: '20px'}}
            onClick={handleClose}>
            Close
          </Button>
          <CreateUserForm
            onSubmit={handeSubmit}
            onUpdate={handleUpdate}
            user={user}
          />
        </Box>
      </Modal>
      <TableList handleEdit={handleEdit} users={userReducer} />
    </Box>
  );
};

export default UserPage;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
