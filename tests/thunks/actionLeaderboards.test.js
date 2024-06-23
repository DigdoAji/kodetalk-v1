import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../src/utils/api';
import {
  asyncReceiveLeaderboards,
  receiveLeaderboardsActionCreator,
} from '../../src/states/leadearboards/action';
import { fakeLeaderboardsResponse, fakeErrorResponse } from '../fakeResponseApi';

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getUserLeaderboards = api.getUserLeaderboards;
  });

  afterEach(() => {
    api.getUserLeaderboards = api._getUserLeaderboards;

    // Delete backup data
    delete api._getUserLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    api.getUserLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);
    const dispatch = vi.fn();

    // Action
    await asyncReceiveLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch)
      .toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
  });

  it('should dispatch action and call alert error when data fetching failed', async () => {
    // Arrange
    api.getUserLeaderboards = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();

    // Action
    await asyncReceiveLeaderboards()(dispatch);

    // Assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
