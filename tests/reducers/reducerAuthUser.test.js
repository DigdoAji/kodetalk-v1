/**
 *  Test scenario for authUserReducer function
 * - should return the initial state when given by unknown action
 * - should return the authUser when given by SET_AUTH_USER action
 * - should return null when given by UNSET_AUTH_USER action
 */

import {
  describe, it, expect,
} from 'vitest';
import authUserReducer from '../../src/states/authUser/reducer';
import ActionType from '../../src/states/constants';

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = null;
    const action = { type: 'UNKNOWN_ACTION' };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    // Arrange
    const initialState = null;
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: {
          id: 'james_doe',
          name: 'James Doe',
          email: 'james@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    // Arrange
    const initialState = {
      id: 'james_doe',
      name: 'James Doe',
      email: 'james@example.com',
      avatar: 'https://generated-image-url.jpg',
    };
    const action = { type: ActionType.UNSET_AUTH_USER };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toBeNull();
  });
});
