import { combineReducers } from 'redux';
import * as forgotPasswordModal from './forgotPasswordModal';
import * as termsAndConditionsModal from './termsAndConditionsModal';
import * as signupModal from './signupModal';

export default combineReducers(Object.assign(
    forgotPasswordModal,
    termsAndConditionsModal,
    signupModal,
));