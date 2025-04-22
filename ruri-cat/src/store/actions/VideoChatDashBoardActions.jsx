//
export const VIDEOCHAT_DASHBOARD_SET_USERNAME = 'VIDEOCHAT_DASHBOARD_SET_USERNAME';
export const VIDEOCHAT_DASHBOARD_SET_ACTIVE_USERS = 'VIDEOCHAT_DASHBOARD_SET_ACTIVE_USERS';
export const VIDEOCHAT_DASHBOARD_SET_GROUP_CALL_ROOMS = 'VIDEOCHAT_DASHBOARD_SET_GROUP_CALL_ROOMS';
//
export const setUserName = (username) => {
  return{
      type:VIDEOCHAT_DASHBOARD_SET_USERNAME,
      username
  }
}
export const setActiveUsers = (activeUsers) => {
  return{
      type:VIDEOCHAT_DASHBOARD_SET_ACTIVE_USERS,
      activeUsers
  }
}
export const setGroupCalls = (groupCallRooms) => {
  return{
      type:VIDEOCHAT_DASHBOARD_SET_GROUP_CALL_ROOMS,
      groupCallRooms
  }
}
