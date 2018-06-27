import {
  CHANGE_LANG,
  CHANGE_FIRST_TIME,
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  FACEBOOK_LOGIN_FAIL,
  LOGOUT
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
export const logout = () => {
  return {
    type: LOGOUT
  };
};
const doFacebookLogin = async dispatch => {
  let { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '1858129071158246',
    {
      permissions: ['public_profile', 'email']
    }
  );
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  const response = await fetch(
    `https://graph.facebook.com/me?access_token=${token}`
  );
  await alert(JSON.stringify(response.json()));
  return dispatch({ type: FACEBOOK_LOGIN });
};
