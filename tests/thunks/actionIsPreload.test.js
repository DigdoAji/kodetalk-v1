/**
 *  Test scenario for asyncPreloadProcess thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert error when data fetching failed
 */

import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../src/utils/api';
import {
  asyncPreloadProcess,
  setIsPreloadActionCreator,
} from '../../src/states/isPreload/action';
import { setAuthUserActionCreator } from '../../src/states/authUser/action';
import { fakeAuthUserResponse, fakeErrorResponse } from '../fakeResponseApi';

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;

    // Delete backup data
    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);
    const dispatch = vi.fn();

    // Action
    await asyncPreloadProcess()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert error when data fetching failed', async () => {
    // Arrange
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();

    // Action
    await asyncPreloadProcess()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
