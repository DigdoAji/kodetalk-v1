import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import ActionType from '../constants';

const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,
  },
});

const asyncRegisterUser = ({ name, email, password }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    await api.register({ name, email, password });
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

export {
  receiveUsersActionCreator,
  asyncRegisterUser,
};
