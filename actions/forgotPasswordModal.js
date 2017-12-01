import * as types from './types';

export function openForgotPasswordModal() {
    return {
        type: types.OPEN_MODAL
    }
}

export function closeForgotPasswordModal() {
    return {
        type: types.CLOSE_MODAL
    }
}