// We are importing all different actions from our app 
// (these actions can be separate js files - better code organization)
import * as CounterActions from './counter';
import * as UsersActions from './users';

// We are combining/merging and exporting all imported app actions
// Grouping all app actions into this const ActionCreators
export const ActionCreators = Object.assign({}, 
    CounterActions,
    UsersActions,
)