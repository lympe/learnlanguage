import {
  CHANGE_LANG,
  CHANGE_FIRST_TIME,
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  FACEBOOK_LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  lang: 'fr',
  langLearn: 'eng',
  firstTime: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return { ...state, lang: action.payload };
    case CHANGE_FIRST_TIME:
      return { ...state, firstTime: false };
    case GOOGLE_LOGIN:
      return { ...state };
    case FACEBOOK_LOGIN:
      return { ...state, firstTime: false };
    case FACEBOOK_LOGIN_FAIL:
      return { ...state };
    default:
      return state;
  }
};
