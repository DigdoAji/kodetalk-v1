const ActionType = {
  // AuthUser
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',

  // Users
  RECEIVE_USERS: 'RECEIVE_USERS',

  // Preload
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',

  // Leaderboards
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',

  // Threads
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRAL_VOTE_THREAD: 'NEUTRAL_VOTE_THREAD',

  // Thread - Detail
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',

  // Thread - Comment
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
  UP_VOTE_THREAD_COMMENT: 'UP_VOTE_THREAD_COMMENT',
  DOWN_VOTE_THREAD_COMMENT: 'DOWN_VOTE_THREAD_COMMENT',
  NEUTRAL_VOTE_THREAD_COMMENT: 'NEUTRAL_VOTE_THREAD_COMMENT',
};

export default ActionType;
