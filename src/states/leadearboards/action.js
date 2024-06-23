import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import ActionType from '../constants';

const receiveLeaderboardsActionCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_LEADERBOARDS,
  payload: {
    leaderboards,
  },
});

const asyncReceiveLeaderboards = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const leaderboards = await api.getUserLeaderboards();
    dispatch(receiveLeaderboardsActionCreator(leaderboards));
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

export {
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboards,
};
