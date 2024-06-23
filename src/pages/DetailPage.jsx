import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, Container } from '@chakra-ui/react';
import ThreadDetail from '../components/threads/ThreadDetail';
import CommentSection from '../components/threads/comments/CommentSection';
import {
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralVoteThreadDetail,
  asyncAddThreadComment,
  asyncToggleUpVoteThreadComment,
  asyncToggleDownVoteThreadComment,
  asyncToggleNeutralVoteThreadComment,
} from '../states/threadDetail/action';

function DetailPage() {
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onComment = ({ content }) => {
    dispatch(asyncAddThreadComment({ threadId: id, content }));
  };

  const onUpvoteThread = () => {
    dispatch(asyncToggleUpVoteThreadDetail(id));
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownVoteThreadDetail(id));
  };

  const onNeutralVoteThread = () => {
    dispatch(asyncToggleNeutralVoteThreadDetail(id));
  };

  const onUpvoteComment = (commentId) => {
    dispatch(asyncToggleUpVoteThreadComment({ threadId: id, commentId }));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncToggleDownVoteThreadComment({ threadId: id, commentId }));
  };

  const onNeutralVoteComment = (commentId) => {
    dispatch(asyncToggleNeutralVoteThreadComment({ threadId: id, commentId }));
  };

  if (!threadDetail) return null;

  return (
    <Box as='main' w='auto' py='3rem'>
      <Container as='section' maxW='6xl' pb='4rem'>
        <Card bg='white'>
          <ThreadDetail
            upVote={onUpvoteThread}
            downVote={onDownVoteThread}
            neutralVote={onNeutralVoteThread}
            authUserId={authUser.id}
            {...threadDetail}
          />
          <CommentSection
            comment={onComment}
            upVote={onUpvoteComment}
            downVote={onDownVoteComment}
            neutralVote={onNeutralVoteComment}
            authUserId={authUser.id}
            {...threadDetail}
          />
        </Card>
      </Container>
    </Box>
  );
}

export default DetailPage;
