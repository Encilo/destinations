import * as types from './types';

export function openTermsAndConditionsModal() {
    return {
        type: types.OPEN_TERMS_AND_CONDITIONS_MODAL
    }
}

export function closeTermsAndConditionsModal() {
    return {
        type: types.CLOSE_TERMS_AND_CONDITIONS_MODAL
    }
}