import { combineReducers } from 'redux';
import * as forgotPasswordModal from './forgotPasswordModal';
import * as termsAndConditionsModal from './termsAndConditionsModal';

export default combineReducers(Object.assign(
    forgotPasswordModal,
    termsAndConditionsModal
));