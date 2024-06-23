import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import LeaderboardItem from './LeaderboardItem';

const LeaderboardsList = ({ leaderboards, authUser }) => (
    <Flex mt={2} direction='column' gap={2} fontSize='1.5rem'>
        {leaderboards.map((leaderboard, index) => (
        <LeaderboardItem
            key={leaderboard.user.id}
            index={index}
            {...leaderboard}
            authUser={authUser}
        />
        ))}
    </Flex>
);

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.object).isRequired,
  authUser: PropTypes.object.isRequired,
};

export default LeaderboardsList;
