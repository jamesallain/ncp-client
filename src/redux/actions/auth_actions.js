import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

//AsyncStorage.setItem('fb_token', token);
//AsyncStorage.getItem('fb_token');

//Action creators by default assume that you're returning an action right away
//Explanation: video 99 10 min
export const facebookLogin = () => async (dispatch) => {
  //2 location for token 1. AsyncStorage 2. Redux
  //easier to retrieve token in redux
  let token = await AsyncStorage.getItem('fd_token');
  if (token) {
    //Dispatch an action FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    //Start up FB Login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async () => {
  let { type, token } = await Facebook.loginWithReadPermissionsAsync('App ID from Facebook as String',{
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

};