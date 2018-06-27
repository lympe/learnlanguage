import {
  CHANGE_LANG,
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  FACEBOOK_LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
  lang: 'fr',
  langLearn: 'eng',
  logedIn: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return { ...state, lang: action.payload };
    case LOGOUT:
      return { ...state, logedIn: false };
    case GOOGLE_LOGIN:
      return { ...state };
    case FACEBOOK_LOGIN:
      return { ...state, logedIn: true };
    case FACEBOOK_LOGIN_FAIL:
      return { ...state };
    default:
      return state;
  }
};
