import {
  describe, it, expect,
} from 'vitest';
import threadsReducer from '../../src/states/threads/reducer';
import ActionType from '../../src/states/constants';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN_ACTION' };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'First Thread',
            body: 'This is the first thread',
            category: 'General',
            createdAt: '2024-06-22T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'thread-2',
            title: 'Second Thread',
            body: 'This is the second thread',
            category: 'General',
            createdAt: '2024-06-23T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with new thread when given by ADD_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'First Thread',
        body: 'This is the first thread',
        category: 'General',
        createdAt: '2024-06-22T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.ADD_THREAD,
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Second Thread',
          body: 'This is the second thread',
          category: 'General',
          createdAt: '2024-06-23T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      action.payload.thread,
      ...initialState,
    ]);
  });

  it('should return the threads with upVotesBy when given by UP_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'First Thread',
        body: 'This is the first thread',
        category: 'General',
        createdAt: '2024-06-22T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['users-2', 'users-3'],
        downVotesBy: ['users-4', 'users-5'],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // Action - Up Vote
    const nextState = threadsReducer(initialState, action);

    // Assert - Up Vote
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [
          ...initialState[0].upVotesBy,
          action.payload.userId,
        ],
      },
    ]);

    // Action - Undo Up Vote
    const nextState2 = threadsReducer(nextState, action);

    // Assert - Undo Up Vote
    expect(nextState2).toEqual(initialState);
  });

  it('should return the threads with downVotesBy when given by DOWN_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'First Thread',
        body: 'This is the first thread',
        category: 'General',
        createdAt: '2024-06-22T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['users-2', 'users-3'],
        downVotesBy: ['users-4', 'users-5'],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // Action - Down Vote
    const nextState = threadsReducer(initialState, action);

    // Assert - Down Vote
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [
          ...initialState[0].downVotesBy,
          action.payload.userId,
        ],
      },
    ]);

    // Action - Undo Down Vote
    const nextState2 = threadsReducer(nextState, action);

    // Assert - Undo Down Vote
    expect(nextState2).toEqual(initialState);
  });

  it('should return the threads with clear/neutral votes when given by NEUTRAL_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'First Thread',
        body: 'This is the first thread',
        category: 'General',
        createdAt: '2024-06-22T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['users-2', 'users-3'],
        downVotesBy: ['users-4', 'users-5'],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.NEUTRAL_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: initialState[0].upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: initialState[0].downVotesBy.filter((id) => id !== action.payload.userId),
      },
    ]);
  });
});
