import axios from "axios";
export const getData = (token) => {
  return {
    type: 'GET_DATA',
    payload: axios.get(`https://isipoint.isipos.online/api/home`,
      {
        headers: {
          token: token,
          headofficeref: '5d67e96742666805b0ef1121'
        }
      }
    )
  }
}
export const getMessage = (token, data) => {
  return {
    type: 'GET_MESSAGE',
    payload: axios.post(`https://isipoint.isipos.online/api/send_message`, data,
      {
        headers: {
          token: token
        }
      }
    )
  }
}
export const getNotification = (token) => {
  return {
    type: 'GET_NOTIFICATION',
    payload: axios.get(`https://isipoint.isipos.online/api/notification`,
      {
        headers: {
          token: token,
        }
      }
    )
  }
}
export const getReward = (token) => {
  return {
    type: 'GET_REWARD',
    payload: axios.get(`https://isipoint.isipos.online/api/rewards`,
      {
        headers: {
          token: token,
          headofficeref: '5d67e96742666805b0ef1121'
        }
      }
    )
  }
}
export const processReward = (id, token) => {
  return {
    type: 'PROCESS_REWARD',
    payload: axios.get(`https://isipoint.isipos.online/api/redeem_reward/${id}`,
      {
        headers: {
          token: token
        }
      }
    )
  }
}
export const getChallenge = (token) => {
  return {
    type: 'GET_CHALLENGE',
    payload: axios.get(`https://isipoint.isipos.online/api/challenges`,
      {
        headers: {
          token: token,
          headofficeref: '5d67e96742666805b0ef1121'
        }
      }
    )
  }
}
export const activeChallenge = (token, data) => {
  return {
    type: 'ACTIVE_CHALLENGE',
    payload: axios.post(`https://isipoint.isipos.online/api/activate_challenge`, data,
      {
        headers: {
          token: token
        }
      }
    )
  }
}
export const getProductGroup = (token) => {
  return {
    type: 'GET_PRODUCT_GROUP',
    payload: axios.get(`https://isipoint.isipos.online/api/product_groups`,
      {
        headers: {
          token: token,
          headofficeref: '5d67e96742666805b0ef1121'
        }
      }
    )
  }
}
export const getProduct = (id, token) => {
  return {
    type: 'GET_PRODUCT',
    payload: axios.get(`https://isipoint.isipos.online/api/products/${id}`,
      {
        headers: {
          token: token
        }
      }
    )
  }
}
export const updateToken = (data, token) => {
  return {
    type: 'UPDATE_TOKEN',
    payload: axios.post(`https://isipoint.isipos.online/api/update_token`,data,
      {
        headers: {
          token: token
        }
      }
    )
  }
}
export const getProductCategory = (token, productGroup) => {
  return {
    type: 'GET_PRODUCT_CATEGORY',
    payload: axios.get(`https://isipoint.isipos.online/api/product_categories`,
      {
        headers: {
          token: token,
          headofficeref: "5d67e96742666805b0ef1121",
          productgroup: productGroup
        }
      }
    )
  }
}
export const getOutlet = (token) => {
  return {
    type: 'GET_OUTLET',
    payload: axios.get(`https://isipoint.isipos.online/api/outlet`,
      {
        headers: {
          token: token,
          headofficeref: '5d67e96742666805b0ef1121'
        }
      }
    )
  }
}
export const getStores = (data) => {
  return {
    type: 'GET_STORES',
    payload: data
  }
}
export const getNews = (token) => {
  return {
    type: 'GET_NEWS',
    payload: axios.get(`https://isipoint.isipos.online/api/news`,
      {
        headers: {
          token: token,
          headofficeref: '5d67e96742666805b0ef1121'
        }
      }
    )
  }
}
export const showQr = (token, data) => {
  return {
    type: 'SHOW_QR',
    payload: axios.get(`https://isipoint.isipos.online/api/show_qr/${data}`,
      {
        headers: {
          'token': token
        }
      }
    )
  }
}
export const getVoucher = (token, code) => {
  return {
    type: 'GET_VOUCHER',
    payload: axios.get(`https://isipoint.isipos.online/api/voucher/${code}`,
      {
        headers: {
          token: token
        }
      }
    )
  }
}
export const getVerification = (token, url) => {
  return {
    type: 'GET_VERIFICATION',
    payload: axios.get(`${url}`,
      {
        headers: {
          token: token
        }
      }
    )
  }
}
export const getPromotion = (token) => {
  return {
    type: 'GET_PROMOTION',
    payload: axios.get(`https://isipoint.isipos.online/api/promotions`,
      {
        headers: {
          token: token,
          headofficeref: '5d67e96742666805b0ef1121'
        }
      }
    )
  }
}
export const getMenu = () => {
  return {
    type: 'GET_MENU',
    payload: axios.get(`https://5d3da01d139f4200145322d2.mockapi.io/api/v1/menus`)
  }
}
export const getHistory = (token) => {
  return {
    type: 'GET_HISTORY',
    payload: axios.get(`https://isipoint.isipos.online/api/point_history`,
      {
        headers: {
          token: token,
        }
      }
    )
  }
}
export const addCart = (data) => {
  return {
    type: 'ADD_CART',
    res: data
  }
}
export const updateCart = (data) => {
  return {
    type: 'UPDATE_CART',
    res: data
  }
}


