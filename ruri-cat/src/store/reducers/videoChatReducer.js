import { 
    VIDEO_CHAT_SET_ACTIVE_USERS,
    VIDEO_CHAT_SET_GROUP_CALL_ROOMS
} from '../actions/videoChatActions';

const initialState = {
    activeUsers: [],
    groupCallRooms: [],
};

const videoChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIDEO_CHAT_SET_ACTIVE_USERS:
            return {
                ...state,
                activeUsers: action.activeUsers,
            };
        case VIDEO_CHAT_SET_GROUP_CALL_ROOMS:
            return {
                ...state,
                groupCallRooms: action.groupCallRooms,
            };
        default:
            return state;
    }
};

export default videoChatReducer;