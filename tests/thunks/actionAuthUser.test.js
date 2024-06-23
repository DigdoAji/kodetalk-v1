import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../src/utils/api';
import {
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
} from '../../src/states/authUser/action';
import {
  fakeAuthUserResponse,
  fakeAccessTokenResponse,
  fakeErrorResponse,
} from '../fakeResponseApi';

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;

    // Delete backup data
    delete api._login;
    delete api._getOwnProfile;
  });

  it('should store accessToken in local storage when user login', async () => {
    // Arrange
    const email = 'james@example.com';
    const password = 'passwordjames';
    api.login = () => Promise.resolve(fakeAccessTokenResponse);
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);
    const dispatch = vi.fn();

    // Action
    await asyncSetAuthUser({ email, password })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(localStorage.getItem('accessToken')).toBe(fakeAccessTokenResponse);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    const email = 'james@example.com';
    const password = 'passwordjames';
    api.login = () => Promise.resolve(fakeAccessTokenResponse);
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);
    const dispatch = vi.fn();

    // Action
    await asyncSetAuthUser({ email, password })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert error when data fetching failed', async () => {
    // Arrange
    const email = 'james@example.com';
    const password = 'passwordjames';
    api.login = () => Promise.reject(fakeErrorResponse);
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();

    // Action
    await asyncSetAuthUser({ email, password })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncUnsetAuthUser thunk', () => {
  it('should be null accessToken in local storage when user logout', async () => {
    // Arrange
    const dispatch = vi.fn();

    // Action
    await asyncUnsetAuthUser()(dispatch);

    // Assert
    expect(localStorage.getItem('accessToken')).toBe('');
  });

  it('should dispatch action correctly when user logout', async () => {
    // Arrange
    const dispatch = vi.fn();

    // Action
    await asyncUnsetAuthUser()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
