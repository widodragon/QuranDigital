export const setConnection = (status) => {
    return {
      type: 'GET_STATUS_INTERNET',
      payload: status
    }
  }