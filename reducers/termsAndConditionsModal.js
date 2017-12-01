import * as types from '../actions/types';

export function termsAndConditionsModal(state = {}, action) {
    switch (action.type) {
        case types.OPEN_TERMS_AND_CONDITIONS_MODAL:
            return {
                ...state,
                isVisible: true
            };
        case types.CLOSE_TERMS_AND_CONDITIONS_MODAL:
            return {
                ...state,
                isVisible: false
            };
        default:
            return state;
    }
} 