import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import ActionType from '../constants';

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

const toggleUpVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleDownVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const addThreadCommentActionCreator = (threadComment) => ({
  type: ActionType.ADD_THREAD_COMMENT,
  payload: {
    threadComment,
  },
});

const toggleUpVoteThreadCommentActionCreator = ({ threadId, commentId, userId }) => ({
  type: ActionType.UP_VOTE_THREAD_COMMENT,
  payload: {
    threadId,
    commentId,
    userId,
  },
});

const toggleDownVoteThreadCommentActionCreator = ({ threadId, commentId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREAD_COMMENT,
  payload: {
    threadId,
    commentId,
    userId,
  },
});

const toggleNeutralVoteThreadCommentActionCreator = ({ threadId, commentId, userId }) => ({
  type: ActionType.NEUTRAL_VOTE_THREAD_COMMENT,
  payload: {
    threadId,
    commentId,
    userId,
  },
});

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(showLoading());

  dispatch(clearThreadDetailActionCreator());
  try {
    const threadDetail = await api.getDetailThread(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

const asyncAddThreadComment = ({ threadId, content }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const threadComment = await api.createComment({ threadId, content });
    dispatch(addThreadCommentActionCreator(threadComment));
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

const asyncToggleUpVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.upVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }

  dispatch(hideLoading());
};

const asyncToggleDownVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.downVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }

  dispatch(hideLoading());
};

const asyncToggleNeutralVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleNeutralVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.neutralVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }

  dispatch(hideLoading());
};

const asyncToggleUpVoteThreadComment = ({ threadId, commentId }) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleUpVoteThreadCommentActionCreator({ threadId, commentId, userId: authUser.id }));

  try {
    await api.upVoteComment({ threadId, commentId });
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteThreadCommentActionCreator({ threadId, commentId, userId: authUser.id }));
  }

  dispatch(hideLoading());
};

const asyncToggleDownVoteThreadComment = ({
  threadId, commentId }) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleDownVoteThreadCommentActionCreator({ threadId, commentId, userId: authUser.id }));

  try {
    await api.downVoteComment({ threadId, commentId });
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteThreadCommentActionCreator({
      threadId, commentId, userId: authUser.id,
    }));
  }

  dispatch(hideLoading());
};

const asyncToggleNeutralVoteThreadComment = ({
  threadId, commentId }) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { authUser } = getState();
  dispatch(toggleNeutralVoteThreadCommentActionCreator({
    threadId, commentId, userId: authUser.id,
  }));

  try {
    await api.neutralVoteComment({ threadId, commentId });
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralVoteThreadCommentActionCreator({
      threadId, commentId, userId: authUser.id,
    }));
  }

  dispatch(hideLoading());
};

export {
  receiveThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleNeutralVoteThreadDetailActionCreator,
  addThreadCommentActionCreator,
  toggleUpVoteThreadCommentActionCreator,
  toggleDownVoteThreadCommentActionCreator,
  toggleNeutralVoteThreadCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralVoteThreadDetail,
  asyncAddThreadComment,
  asyncToggleUpVoteThreadComment,
  asyncToggleDownVoteThreadComment,
  asyncToggleNeutralVoteThreadComment,
};
