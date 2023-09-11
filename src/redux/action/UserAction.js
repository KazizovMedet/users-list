import axios from "axios";
import Cookies from 'js-cookie'
import {history} from '../../lib/history'
import {isAuth} from "../../lib/helper";

export const authUser = (value) => {
  return (dispatch) => {
    axios.post('https://api.escuelajs.co/api/v1/auth/login', value)
      .then(res => {
        dispatch({type: 'AUTH_USER', payload: res.data})
        Cookies.set('token', res.data.access_token)
        dispatch(getCurrentUser())
        localStorage.setItem('token', JSON.stringify(res.data.access_token))
        localStorage.setItem('isAuth', JSON.stringify(true))
      })
  }
}

export const registerUser = (value) => {
  return (dispatch) => {
    axios.post('https://api.escuelajs.co/api/v1/users', value)
      .then(res => {
        history.push({pathname: '/sign-in'}, {state: true})
      })
  }
}
export const logOutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('isAuth')
    Cookies.remove('token')
    dispatch({type: 'LOG_OUT'})
    history.push({ pathname: `/sign-in` }, { state: true })
  }
}

export const getCurrentUser = () => {
  const token = Cookies.get('token')
  return (dispatch) => {
    axios('https://api.escuelajs.co/api/v1/auth/profile', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => {
        dispatch({type: 'GET_CURRENT_USER', payload: res.data})
        localStorage.setItem('user', JSON.stringify(res.data))
        history.push({ pathname: `/home-page` }, { state: true })
        console.log(isAuth())
      })
  }
}

export const getUsers = () => {
  return (dispatch) => {
    axios('https://6434ec4f537112453fc9514e.mockapi.io/users')
      .then(res => dispatch({type: 'GET_USERS', payload: res.data}))
      .catch(err => dispatch({type: 'REQUEST_ERROR'}))
  }
}
export const addUser = (values) => {
  return (dispatch) => {
    axios.post('https://6434ec4f537112453fc9514e.mockapi.io/users', values)
      .then(res => dispatch({type: 'GET_USERS', payload: res.data}))
  }
}

export const updateUser = (values) => {
  return (dispatch) => {
    axios.put(`https://6434ec4f537112453fc9514e.mockapi.io/users/${values.id}`, values)
      .then(res => {
        dispatch({type: 'EDIT_USER' , payload: res.data})
      })
  }
}