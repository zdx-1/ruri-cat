/**
 * 视频聊天房间的模拟数据
 */
export const roomMockData = {
    roomId: 'room-123',
    hostId: 'host-001',
    participants: [
        { id: 'user-001', name: '用户1', role: 'host' },
        { id: 'user-002', name: '用户2', role: 'guest' }
    ],
    settings: {
        maxParticipants: 4,
        allowChat: true,
        allowScreenShare: true
    }
};

/**
 * 聊天消息的模拟数据
 */
export const chatMessagesMock = [
    {
        id: 'msg-001',
        userId: 'user-001',
        userName: '用户1',
        content: '大家好！',
        timestamp: new Date().toISOString()
    }
];

/**
 * 视频设置的模拟数据
 */
export const videoSettingsMock = {
    resolution: '720p',
    frameRate: 30,
    bitrate: 1500,
    codec: 'H.264'
};