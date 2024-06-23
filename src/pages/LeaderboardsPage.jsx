import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { asyncReceiveLeaderboards } from '../states/leadearboards/action.js';
import LeaderboardsList from '../components/leaderboards/LeaderboardsList.jsx';
import Logo from '../components/common/Logo';

const LeaderboardsPage = () => {
  const { authUser, leaderboards } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <Box as='main' w='auto' py='2rem'>
      <Container as='section' maxW='4xl' pb='4rem'>
      <Logo width='100px' height='100px'/>
        <Heading
          as='h2'
          align='center'
          fontSize='3xl'
          mt='1rem'>
          <span style={{ color: '#48b3fc' }}>KodeTalk</span> Ranking
        </Heading>
        <Flex as='header' mt={5} justify='space-between' fontSize='1.5rem'>
          <Text>User Ranked</Text>
          <Text>Score</Text>
        </Flex>
        <LeaderboardsList leaderboards={leaderboards} authUser={authUser} />
      </Container>
    </Box>
  );
};

export default LeaderboardsPage;
