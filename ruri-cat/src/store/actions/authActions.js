// 认证相关的 action types
export const AUTH_SET_USERNAME = 'AUTH_SET_USERNAME';
export const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Action Creators
export const setUserName = (username) => ({
    type: AUTH_SET_USERNAME,
    username
});

export const setToken = (token) => ({
    type: AUTH_SET_TOKEN,
    token
});

export const logout = () => {
    // 清除本地存储的登录信息
    localStorage.clear();
    return {
        type: AUTH_LOGOUT
    };
};