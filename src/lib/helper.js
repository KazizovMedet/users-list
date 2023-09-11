import Cookies from 'js-cookie'
export const isAuth = () => {
   // const isAuthenticated = JSON.parse(localStorage.getItem('isAuth'))
    const token = Cookies.get('token')
    const localToken = JSON.parse(localStorage.getItem('token'))
  return !!(token && localToken)
}

export const isPrivate = () => {
  // const isAuthenticated = JSON.parse(localStorage.getItem('isAuth'))
  const token = Cookies.get('token')
  const localToken = JSON.parse(localStorage.getItem('token'))
  return !!(token && localToken)
}