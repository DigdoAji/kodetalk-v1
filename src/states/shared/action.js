import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPopulateThreadAndUsers = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const threads = await api.getAllThreads();
    const users = await api.getAllUsers();

    dispatch(receiveThreadsActionCreator(threads));
    dispatch(receiveUsersActionCreator(users));
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

export { asyncPopulateThreadAndUsers };
