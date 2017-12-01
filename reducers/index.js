import { combineReducers } from 'redux';
import * as forgotPasswordModal from './forgotPasswordModal';

export default combineReducers(Object.assign(
    forgotPasswordModal,
));