import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import ActionType from '../constants';
import { setAuthUserActionCreator } from '../authUser/action';

const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: {
    isPreload,
  },
});

const asyncPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    dispatch(setAuthUserActionCreator(null));
  } finally {
    dispatch(setIsPreloadActionCreator(false));
  }

  dispatch(hideLoading());
};

export {
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
