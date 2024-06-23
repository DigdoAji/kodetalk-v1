import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import CommentItem from './CommentItem';

export default function CommentList({
  commentList,
  upVote,
  downVote,
  neutralVote,
  authUserId,
}) {
  return (
    <Flex direction='column'>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.id}
          upVote={upVote}
          downVote={downVote}
          neutralVote={neutralVote}
          authUserId={authUserId}
          {...comment}
        />
      ))}
    </Flex>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.object).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUserId: PropTypes.string.isRequired,
};
