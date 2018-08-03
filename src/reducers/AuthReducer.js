import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    email:'',
    password:'',
    user: null,
    error:'',
    loading: false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
          console.log(state);
          return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
        console.log(action.payload);
          return { ...state, password: action.payload }
        default:
          return state;
    }

};