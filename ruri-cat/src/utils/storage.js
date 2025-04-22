/**
 * 本地存储工具类
 */

// 存储键名常量
const STORAGE_KEYS = {
    USERNAME: 'username',
    TOKEN: 'token',
    REMEMBER_LOGIN: 'remember_login'
};

/**
 * 保存登录信息
 * @param {Object} loginInfo - 登录信息
 * @param {string} loginInfo.username - 用户名
 * @param {string} loginInfo.token - 登录token
 */
export const saveLoginInfo = (loginInfo) => {
    localStorage.setItem(STORAGE_KEYS.USERNAME, loginInfo.username);
    localStorage.setItem(STORAGE_KEYS.TOKEN, loginInfo.token);
    localStorage.setItem(STORAGE_KEYS.REMEMBER_LOGIN, 'true');
};

/**
 * 清除登录信息
 */
export const clearLoginInfo = () => {
    localStorage.removeItem(STORAGE_KEYS.USERNAME);
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REMEMBER_LOGIN);
};

/**
 * 获取保存的登录信息
 * @returns {Object|null} 返回登录信息对象或null
 */
export const getLoginInfo = () => {
    const remember = localStorage.getItem(STORAGE_KEYS.REMEMBER_LOGIN);
    if (remember) {
        return {
            username: localStorage.getItem(STORAGE_KEYS.USERNAME),
            token: localStorage.getItem(STORAGE_KEYS.TOKEN)
        };
    }
    return null;
};