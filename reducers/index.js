import { combineReducers } from 'redux';
import * as forgotPasswordModal from './forgot-password-modal';
import * as termsAndConditionsModal from './terms-and-conditions-modal';
import * as signupModal from './signup-modal';

export default combineReducers(Object.assign(
    forgotPasswordModal,
    termsAndConditionsModal,
    signupModal,
));