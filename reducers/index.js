import { combineReducers } from 'redux';

import * as counter from './counter';
import * as users from './users';

export default combineReducers(Object.assign(
    counter,
    users
));