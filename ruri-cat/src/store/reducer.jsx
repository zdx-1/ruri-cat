import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import videoChatReducer from './reducers/videoChatReducer';

export default combineReducers({
    auth: authReducer,
    videoChat: videoChatReducer,
});
