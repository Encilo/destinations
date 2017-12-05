import * as types from './types';

export function openSignupModal() {
    return {
        type: types.OPEN_SIGNUP_MODAL
    }
}

export function closeSignupModal() {
    return {
        type: types.CLOSE_SIGNUP_MODAL
    }
}