import * as types from '../actions/types';

export function users(state = {}, action) {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                fetching_users: true
            }
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                fetching_users: false,
                list: action.data
            }
        case types.GET_USERS_FAIL:
            return {
                ...state,
                fetching_users: false
            }
        default:
            return state;
    }
} 