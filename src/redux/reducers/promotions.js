const initialState = {
  data: [],
  isLoading: false,
  data: [],
  cart: [],
  reward: [],
  menu: [],
  history: [],
  challenge: [],
  product_group: [],
  product: [],
  news: {},
  promotion: {},
  outlet: [],
  process_reward: {},
  verification: [],
  active: {},
  notification: [],
  message: {},
  showqr: {},
  voucher: {},
  stores: [],
  product_category: {},
  update_token:{}
}
export default promotions = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STORES':
      return {
        ...state,
        stores: action.payload
      }

    case 'GET_DATA_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_DATA_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_DATA_FULFILLED':
      return {
        ...state,
        isLoading: false,
        promotion: action.payload.data
      }

    case 'GET_MESSAGE_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_MESSAGE_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_MESSAGE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        message: action.payload.data
      }

    case 'GET_NOTIFICATION_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_NOTIFICATION_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_NOTIFICATION_FULFILLED':
      return {
        ...state,
        isLoading: false,
        notification: action.payload.data
      }

    case 'GET_REWARD_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_REWARD_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_REWARD_FULFILLED':
      return {
        ...state,
        isLoading: false,
        reward: action.payload.data
      }

    case 'GET_VOUCHER_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_VOUCHER_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_VOUCHER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        voucher: action.payload.data
      }

    case 'GET_CHALLENGE_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_CHALLENGE_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_CHALLENGE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        challenge: action.payload.data
      }

    case 'ACTIVE_CHALLENGE_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'ACTIVE_CHALLENGE_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'ACTIVE_CHALLENGE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        active: action.payload.data
      }

    case 'GET_MENU_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_MENU_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_MENU_FULFILLED':
      return {
        ...state,
        isLoading: false,
        menu: action.payload.data
      }

    case 'GET_NEWS_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_NEWS_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_NEWS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        news: action.payload.data
      }

    case 'GET_PROMOTION_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_PROMOTION_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_PROMOTION_FULFILLED':
      return {
        ...state,
        isLoading: false,
        promotion: action.payload.data
      }

    case 'UPDATE_TOKEN_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'UPDATE_TOKEN_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'UPDATE_TOKEN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        update_token: action.payload.data
      }

    case 'GET_PRODUCT_GROUP_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_PRODUCT_GROUP_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_PRODUCT_GROUP_FULFILLED':
      return {
        ...state,
        isLoading: false,
        product_group: action.payload.data
      }

    case 'GET_PRODUCT_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_PRODUCT_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_PRODUCT_CATEGORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        product_category: action.payload.data
      }

    case 'GET_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        product: action.payload.data
      }

    case 'GET_VERIFICATION_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_VERIFICATION_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_VERIFICATION_FULFILLED':
      return {
        ...state,
        isLoading: false,
        verification: action.payload.data
      }

    case 'GET_HISTORY_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_HISTORY_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_HISTORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        history: action.payload.data
      }
    case 'GET_OUTLET_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_OUTLET_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_OUTLET_FULFILLED':
      return {
        ...state,
        isLoading: false,
        outlet: action.payload.data
      }

    case 'SHOW_QR_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'SHOW_QR_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'SHOW_QR_FULFILLED':
      return {
        ...state,
        isLoading: false,
        showqr: action.payload.data
      }

    case 'PROCESS_REWARD_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'PROCESS_REWARD_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'PROCESS_REWARD_FULFILLED':
      return {
        ...state,
        isLoading: false,
        process_reward: action.payload.data
      }
    case 'ADD_CART':
      let temp = [];
      let data = initialState.cart.concat(action.res)
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart, ...data]
      }
    case 'UPDATE_CART':
      return {
        ...state,
        isLoading: false,
        cart: action.res
      }
    default:
      return state;
  }
}
