// 视频聊天相关的 action types
export const VIDEO_CHAT_SET_ACTIVE_USERS = 'VIDEO_CHAT_SET_ACTIVE_USERS';
export const VIDEO_CHAT_SET_GROUP_CALL_ROOMS = 'VIDEO_CHAT_SET_GROUP_CALL_ROOMS';

// Action Creators
export const setActiveUsers = (activeUsers) => ({
    type: VIDEO_CHAT_SET_ACTIVE_USERS,
    activeUsers
});

export const setGroupCalls = (groupCallRooms) => ({
    type: VIDEO_CHAT_SET_GROUP_CALL_ROOMS,
    groupCallRooms
});