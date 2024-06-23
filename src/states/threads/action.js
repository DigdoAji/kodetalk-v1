import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import ActionType from '../constants';

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

const toggleUpVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleDownVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.NEUTRAL_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

const asyncToggleUpVoteThread = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.upVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }

  dispatch(hideLoading());
};

const asyncToggleDownVoteThread = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.downVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }

  dispatch(hideLoading());
};

const asyncToggleNeutralVoteThread = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleNeutralVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.neutralVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }

  dispatch(hideLoading());
};

export {
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteThreadActionCreator,
  toggleDownVoteThreadActionCreator,
  toggleNeutralVoteThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralVoteThread,
};
