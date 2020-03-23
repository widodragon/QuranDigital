import axios from "axios";
export const getLogin = (body) => {
  return {
    type: 'GET_LOGIN',
    payload: axios.post(`https://isipoint.isipos.online/api/signin`,body)
  }
}
export const getRegister = (body) => {
  return {
    type: 'GET_REGISTER',
    payload: axios.post(`https://isipoint.isipos.online/api/register`,body,
      {
         headers: {
           headofficeref: '5d67e96742666805b0ef1121'
         }
      }
    )
  }
}
export const getProfile = (token) => {
  return {
    type: 'GET_PROFILE',
    payload: axios.get(`https://isipoint.isipos.online/api/my_profile`,
      {
         headers: {
           'token': token,
           'Content-Type':'application/x-www-form-urlencoded'
         }
      }
    )
  }
}
export const changeProfile = (token, body) => {
  return {
    type: 'CHANGE_PROFILE',
    payload: axios.post(`https://isipoint.isipos.online/api/update_profile`,body,
      {
         headers: {
           'token': token
         }
      }
    )
  }
}

export const getLogout = (token) => {
  return {
    type: 'GET_LOGOUT',
    payload: axios.get(`https://isipoint.isipos.online/api/signout`,
      {
         headers: {
           'token': token
         }
      }
    )
  }
}

export const getPosition = (data) => {
  return {
    type: 'GET_POSITION',
    payload: data
  }
}

export const getReset = (token, data) => {
  return {
    type: 'GET_RESET',
    payload: axios.post(`https://isipoint.isipos.online/api/forgot_password`,data,
      {
         headers: {
           'token': token,
           'headofficeref':"5d67e96742666805b0ef1121"
         }
      }
    )
  }
}

