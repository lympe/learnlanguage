import { CHANGE_LANG, CHANGE_FIRST_TIME } from './types';

export const changeLang = lang => {
  return {
    type: CHANGE_LANG,
    payload: lang
  };
};
export const changeFirstTime = () => {
  return {
    type: CHANGE_FIRST_TIME
  };
};
