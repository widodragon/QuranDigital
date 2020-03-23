const initialState = {
    isLoading: false,
    isConnected: false
}
export default contacts = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_STATUS_INTERNET':
            return {
                ...state,
                isConnected: action.payload
            }
        default:
            return state;
    }
}
