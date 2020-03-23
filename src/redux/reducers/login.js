const initialState = {
  isLoading: false,
  login:{},
  reset:{},
  logout:{},
  profile:{},
  register:{},
  change_profile:{},
  position:{}
}
export default contacts = (state = initialState, action) => {
  switch (action.type) {
    
    case 'GET_POSITION':
    return {
      ...state,
      position: action.payload
    }

    case 'GET_LOGIN_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_LOGIN_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_LOGIN_FULFILLED':
    return {
      ...state,
      isLoading: false,
      login: action.payload.data
    }

    case 'GET_RESET_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_RESET_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_RESET_FULFILLED':
    return {
      ...state,
      isLoading: false,
      reset: action.payload.data
    }

    case 'GET_LOGOUT_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_LOGOUT_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_LOGOUT_FULFILLED':
    return {
      ...state,
      isLoading: false,
      logout: action.payload.data
    }

    case 'GET_REGISTER_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_REGISTER_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_REGISTER_FULFILLED':
    return {
      ...state,
      isLoading: false,
      register: action.payload.data
    }

    case 'GET_PROFILE_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_PROFILE_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_PROFILE_FULFILLED':
    return {
      ...state,
      isLoading: false,
      profile: {...action.payload.data}
    }

    case 'CHANGE_PROFILE_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'CHANGE_PROFILE_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'CHANGE_PROFILE_FULFILLED':
    return {
      ...state,
      isLoading: false,
      change_profile: action.payload.data
    }
    default:
    return state;
  }
}
