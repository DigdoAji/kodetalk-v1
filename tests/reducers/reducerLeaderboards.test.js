/**
 *  Test scenario for leaderboardsReducer function
 * - should return the initial state when given by unknown action
 * - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 */

import {
  describe, it, expect,
} from 'vitest';
import leaderboardsReducer from '../../src/states/leadearboards/reducer';
import ActionType from '../../src/states/constants';

describe('leaderboardsReducer function', () => {
  it('shoud return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN_ACTION' };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'James Doe',
              email: 'james@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
          {
            user: {
              id: 'users-2',
              name: 'Anny Doe',
              email: 'Anny@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 5,
          },
        ],
      },
    };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
