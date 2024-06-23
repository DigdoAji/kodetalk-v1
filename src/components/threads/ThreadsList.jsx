import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import ThreadItem from './ThreadItem';

export default function ThreadsList({
  threads,
  upVote,
  downVote,
  neutralVote,
  authUserId,
}) {
  return (
    <Box as='div'>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          {...thread}
          authUserId={authUserId}
          upVote={upVote}
          downVote={downVote}
          neutralVote={neutralVote}
        />
      ))}
    </Box>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUserId: PropTypes.string.isRequired,
};
