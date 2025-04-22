import { AUTH_SET_USERNAME, AUTH_LOGOUT, AUTH_SET_TOKEN } from '../actions/authActions';

const initialState = {
    username: '',
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SET_USERNAME:
            return {
                ...state,
                username: action.username,
            };
        case AUTH_SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                username: '',
                token: null,
            };
        default:
            return state;
    }
};

export default authReducer;