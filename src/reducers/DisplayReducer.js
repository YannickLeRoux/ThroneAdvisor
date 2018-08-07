import {
    HIDE_LOGIN,
    SHOW_LOGIN
} from '../actions/types';

const INITIAL_STATE = {
  isLoginVisible: false
};

export default (state= INITIAL_STATE, action ) => {
        switch(action.type) {
            case HIDE_LOGIN:
              return { ...state, isLoginVisible: false}
            case SHOW_LOGIN:
              return {...state, isLoginVisible: true}
            default:
              return state;
  }
};

