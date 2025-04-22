import { legacy_createStore as createStore } from 'redux';
import mainReducer from './reducer';
//引入redux扩展工具
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(mainReducer, composeWithDevTools());

export default store;
