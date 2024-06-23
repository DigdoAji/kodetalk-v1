import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import ActionType from '../constants';

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const unsetAuthUserActionCreator = () => ({
  type: ActionType.UNSET_AUTH_USER,
  payload: {
    authUser: null,
  },
});

const asyncSetAuthUser = ({ email, password }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const token = await api.login({ email, password });
    api.putAccessToken(token);
    const authUser = await api.getOwnProfile();

    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

const asyncUnsetAuthUser = () => (dispatch) => {
  dispatch(showLoading());

  dispatch(unsetAuthUserActionCreator());
  api.putAccessToken('');

  dispatch(hideLoading());
};

export {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
