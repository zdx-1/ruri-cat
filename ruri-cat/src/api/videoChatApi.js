/**
 * 视频聊天相关的 API 服务
 */

/**
 * 获取活跃用户列表
 * @returns {Promise<Array>} 返回活跃用户列表
 */
export const getActiveUsers = async () => {
    // 模拟 API 请求延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
        success: true,
        data: [
            { id: 1, username: 'user1' },
            { id: 2, username: 'user2' }
        ]
    };
};

/**
 * 获取群组通话房间列表
 * @returns {Promise<Array>} 返回群组通话房间列表
 */
export const getGroupCallRooms = async () => {
    // 模拟 API 请求延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
        success: true,
        data: [
            { id: 1, name: 'Room 1', participants: ['user1', 'user2'] },
            { id: 2, name: 'Room 2', participants: ['user3'] }
        ]
    };
};