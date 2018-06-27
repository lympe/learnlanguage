import { CHANGE_LANG, CHANGE_FIRST_TIME } from '../actions/types';

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
    default:
      return state;
  }
};
