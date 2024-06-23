import React from 'react';
import PropTypes from 'prop-types';
import { FaRegComment } from 'react-icons/fa';
import { AbsoluteCenter, Box, Divider, Flex, Heading } from '@chakra-ui/react';
import CommentFormInput from './CommentFormInput';
import CommentsList from './CommentsList';

export default function CommentSection({
  comments,
  comment,
  upVote,
  downVote,
  neutralVote,
  authUserId,
}) {
  return (
    <>
      <Box position='relative' my={5}>
        <Divider borderColor='gray.500' />
        <AbsoluteCenter px='4' bg='white'>
          <Flex align='center'>
            <FaRegComment fontSize={20}/>
            <Heading as='h3' ml={2} fontSize='xl' color='gray.900'>
              Comments ({comments.length})
            </Heading>
          </Flex>
        </AbsoluteCenter>
      </Box>
      <CommentFormInput comment={comment} />
      <CommentsList
        commentList={comments}
        upVote={upVote}
        downVote={downVote}
        neutralVote={neutralVote}
        authUserId={authUserId}
      />
    </>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  comment: PropTypes.func.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUserId: PropTypes.string.isRequired,
};
