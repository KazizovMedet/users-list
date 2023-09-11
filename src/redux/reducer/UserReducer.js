const initialState = {
  users: [],
  isOpenAlert: false,
  error: false,
  isAuth: false,
  currentUser: {}
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {...state, users: action.payload}
    case 'ADD_USER':
      return {...state, isOpenAlert: true, users: [...state.users, action.payload]}
    case 'DELETE_USER':
      return {...state, users: state.users.filter(user => user.id !== action.payload.id)}
    case 'EDIT_USER':
      return {...state, isOpenAlert: true, users: state.users.map(user => user.id === action.payload.id ? action.payload : user)}
    case 'CLOSE_ALERT':
      return {...state, isOpenAlert: false}
    case 'CLOSE_ERROR':
      return {...state, error: false}
    case 'REQUEST_ERROR':
      return {...state, error: true}
    case 'AUTH_USER':
      return {...state, isAuth: true}
    case 'GET_CURRENT_USER':
      return {...state, currentUser: action.payload}
    case 'LOG_OUT':
      return {...state, isAuth: false, currentUser: {}}
    case 'SET_AUTH':
      return {...state, isAuth: true}
    default:
      return state
  }
}