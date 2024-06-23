import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import {
  Card,
  Heading,
  Tag,
  Text,
  Flex,
  Icon,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Button,
  Avatar,
  Box,
} from '@chakra-ui/react';
import {
  BiLike,
  BiDislike,
  BiSolidLike,
  BiSolidDislike,
} from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { postedAt } from '../../utils/index';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  user,
  upVotesBy,
  downVotesBy,
  totalComments,
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

  const navigate = useNavigate();

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

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <Card size='lg' mt='2rem' bg='white' border='1px'>
      <CardHeader as='header'>
        <Flex justify='space-between' mb={5}>
          <Flex align='center' gap={2}>
            <Avatar src={user.avatar} alt={user.name} />
            <Flex direction='column'>
              <Text as='b' ml={2} fontSize='m'>{user.name}</Text>
              <Text ml={2} fontSize='xs' color='gray.500'>
                {postedAt(createdAt)}
              </Text>
            </Flex>
          </Flex>
          <Flex align='center' gap={2}>
            <Tag
              size='lg'
              color='gray.800'
              variant='outline'
              borderRadius='lg'
              mb='1rem'
            >
              <Text fontSize={15}>#{category}</Text>
            </Tag>
          </Flex>
        </Flex>
        <Heading color='gray.900'>
          <Link onClick={onThreadClick}>{title}</Link>
        </Heading>
      </CardHeader>
      <CardBody mt={-6} fontSize='md' color='gray.900'>
        <Text as='div' noOfLines={4}>
          {parse(body)}
        </Text>
      </CardBody>
      <CardFooter as='footer' mt={-4} justify='space-between' gap={15}>
        <Flex gap={4} align='center'>
          <Button
            colorScheme='cyan'
            color='white'
            isActive={upVoteIsActive}
            leftIcon={upVoteIsActive ? <BiSolidLike /> : <BiLike />}
            aria-label='Upvote Button'
            onClick={() => onUpvoteHandleClick()}
          >
            <Text>{upVotesBy.length}</Text>
          </Button>
          <Button
            colorScheme='cyan'
            color='white'
            isActive={downVoteIsActive}
            leftIcon={downVoteIsActive ? <BiSolidDislike /> : <BiDislike />}
            aria-label='Downvote Button'
            onClick={() => onDownvoteHandleClick()}
          >
            <Text>{downVotesBy.length}</Text>
          </Button>
        </Flex>
        <Flex gap={3} align='center'>
          <Icon as={FaRegComment} boxSize={5} />
          <Text>{totalComments} Comments</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUserId: PropTypes.string.isRequired,
};
