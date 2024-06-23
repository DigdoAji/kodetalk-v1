const fakeUsersResponse = [
  {
    id: 'james_doe',
    name: 'James Doe',
    email: 'james@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  {
    id: 'anny_doe',
    name: 'Anny Doe',
    email: 'any@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeAuthUserResponse = {
  id: 'james_doe',
  name: 'James Doe',
  email: 'james@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeThreadsResponse = [
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
];

const fakeLeaderboardsResponse = [
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
];

const fakeAccessTokenResponse = 'fakeAccessToken';

const fakeErrorResponse = new Error('Ups, something went wrong');

export {
  fakeUsersResponse,
  fakeAuthUserResponse,
  fakeThreadsResponse,
  fakeLeaderboardsResponse,
  fakeAccessTokenResponse,
  fakeErrorResponse,
};
