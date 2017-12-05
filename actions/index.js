// We are importing all different actions from our app 
// (these actions can be separate js files - better code organization)
import * as ForgotPasswordModalActions from './forgot-password-modal';
import * as TermsAndConditionsModalActions from './terms-and-conditions-modal';
import * as SignupModal from './signup-modal';

// We are combining/merging and exporting all imported app actions
// Grouping all app actions into this const ActionCreators
export const ActionCreators = Object.assign({}, 
    ForgotPasswordModalActions,
    TermsAndConditionsModalActions,
    SignupModal,
)