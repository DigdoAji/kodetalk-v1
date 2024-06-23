import React, { useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {
  Avatar,
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Tag,
  Text,
} from '@chakra-ui/react';
import {
  BiLike,
  BiDislike,
  BiSolidLike,
  BiSolidDislike,
} from 'react-icons/bi';
import { postedAt } from '../../utils/index';

export default function ThreadDetail({
  upVote,
  downVote,
  neutralVote,
  authUserId,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
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
      neutralVote();
      setUpVoteSetActive(false);
    } else {
      upVote();
      setUpVoteSetActive(true);
      setDownVoteSetActive(false);
    }
  };

  const onDownvoteHandleClick = () => {
    if (downVotesBy.includes(authUserId)) {
      neutralVote();
      setDownVoteSetActive(false);
    } else {
      downVote();
      setDownVoteSetActive(true);
      setUpVoteSetActive(false);
    }
  };

  return (
    <>
      <CardHeader as='header'>
        <Flex justify='space-between' mb={5}>
          <Flex align='center' gap={2}>
            <Avatar src={owner.avatar} alt={owner.name} />
            <Flex direction='column'>
              <Text as='b' ml={2} fontSize='m'>{owner.name}</Text>
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
        <Heading as='h2' size='2xl' color='gray.900'>
          {title}
        </Heading>
      </CardHeader>
      <CardBody fontSize='md' color='gray.900' mt={-5}>
        <Text as='div' fontSize='xl' >
          {parse(body)}
        </Text>
      </CardBody>
      <CardFooter as='footer' justify='space-between' gap={15} fontSize='lg'>
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
    </>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUserId: PropTypes.string.isRequired,
};
