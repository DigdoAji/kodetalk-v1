import {
  describe, it, expect,
} from 'vitest';
import isPreloadReducer from '../../src/states/isPreload/reducer';
import ActionType from '../../src/states/constants';

describe('isPreloadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = true;
    const action = { type: 'UNKNOWN_ACTION' };

    // Action
    const nextState = isPreloadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the isPreload when given by SET_IS_PRELOAD action', () => {
    // Arrange
    const initialState = true;
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload: false,
      },
    };

    // Action
    const nextState = isPreloadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
