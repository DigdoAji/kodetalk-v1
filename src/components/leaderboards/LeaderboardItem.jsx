import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Flex,
  Text,
  Skeleton,
} from '@chakra-ui/react';

const LeaderboardItem = ({ index, user, score, authUser }) => (
  <Flex align='center'>
    <Text as='b' fontSize='lg' mr='7'>
     {index + 1}
    </Text>
    <Flex align='center' justify='space-between' w='100%'>
    <Flex
      gap='5'
      align='center'
    >
      <Avatar name={user?.name} rounded='sm'/>
      {authUser.id === user.id ? (
        <Text
          color='red'
          fontSize='lg'
          noOfLines='1'
        >
          {user.name} (You)
        </Text>
      ) : (
        <Text
          fontSize='lg'
          noOfLines='1'
        >
          {user.name}
        </Text>
      )}
    </Flex>
    <Text fontSize='lg' mr={{ base: 4, md: 0 } }>
      {score}
    </Text>
    </Flex>
  </Flex>
);

LeaderboardItem.propTypes = {
  index: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  score: PropTypes.number.isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default LeaderboardItem;
