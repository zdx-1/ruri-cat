/**
 * 用户认证相关的 API 服务
 */

/**
 * 用户登录
 * @param {Object} credentials - 登录凭证
 * @param {string} credentials.username - 用户名
 * @param {string} credentials.password - 密码
 * @returns {Promise<Object>} 返回登录结果，包含token
 */
export const login = async (credentials) => {
    // 模拟 API 请求延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟服务器验证
    if (credentials.username === 'admin' && credentials.password === '123456') {
        return {
            success: true,
            data: {
                username: credentials.username,
                token: `mock-jwt-token-${Date.now()}` // 生成一个带时间戳的模拟token
            }
        };
    }
    
    throw new Error('用户名或密码错误');
};