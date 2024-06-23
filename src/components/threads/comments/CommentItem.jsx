import React, { useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import {
  BiLike,
  BiDislike,
  BiSolidLike,
  BiSolidDislike,
} from 'react-icons/bi';
import { postedAt } from '../../../utils/index';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neutralVote,
  authUserId,
}) {
  const [
    upVoteIsActive,
    setUpVoteSetActive,
  ] = useState(upVotesBy.includes(authUserId));

  const [
    downVoteIsActive,
    setDownVoteSetActive,
  ] = useState(downVotesBy.includes(authUserId));

  const onUpvoteHandleClick = () => {
    if (upVotesBy.includes(authUserId)) {
      neutralVote(id);
      setUpVoteSetActive(false);
    } else {
      upVote(id);
      setUpVoteSetActive(true);
      setDownVoteSetActive(false);
    }
  };

  const onDownvoteHandleClick = () => {
    if (downVotesBy.includes(authUserId)) {
      neutralVote(id);
      setDownVoteSetActive(false);
    } else {
      downVote(id);
      setDownVoteSetActive(true);
      setUpVoteSetActive(false);
    }
  };

  return (
    <CardBody m={-2}>
      <Card bg='cyan.50' mx={3}>
        <CardHeader display='flex' alignItems='center' justifyContent='space-between'>
          <Flex align='center' gap={2}>
            <Avatar name={owner.name} src={owner.avatar} />
            <Heading as='p' fontSize='lg' ml={1}>
              {owner.name}
            </Heading>
          </Flex>
          <Text>{postedAt(createdAt)}</Text>
        </CardHeader>
        <CardBody mt={-5}>
          <Text as='div' ml={1} fontSize={18}>{parse(content)}</Text>
        </CardBody>
        <CardFooter mt={-3}>
          <Flex gap={4} align='center'>
            <Button
              colorScheme='cyan'
              color='white'
              isActive={upVoteIsActive}
              leftIcon={upVoteIsActive ? <BiSolidLike /> : <BiLike />}
              aria-label='Up Vote Button'
              onClick={() => onUpvoteHandleClick()}
            >
              <Text>{upVotesBy.length}</Text>
            </Button>
            <Button
              colorScheme='cyan'
              color='white'
              isActive={downVoteIsActive}
              leftIcon={downVoteIsActive ? <BiSolidDislike /> : <BiDislike />}
              aria-label='Down Vote Button'
              onClick={() => onDownvoteHandleClick()}
            >
              <Text>{downVotesBy.length}</Text>
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </CardBody>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape),
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUserId: PropTypes.string.isRequired,
};
