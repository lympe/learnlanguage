import {
  CHANGE_LANG,
  CHANGE_FIRST_TIME,
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  FACEBOOK_LOGIN_FAIL
} from './types';
import Expo from 'expo';

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
export const facebookConnect = () => async dispatch => {
  doFacebookLogin(dispatch);
  return (type: FACEBOOK_LOGIN);
};
export const googleConnect = () => {
  return {
    type: GOOGLE_LOGIN
  };
};
const doFacebookLogin = async dispatch => {
  let { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '1858129071158246',
    {
      permissions: ['public_profile']
    }
  );
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  alert(token);
  return dispatch({ type: FACEBOOK_LOGIN });
};
