import React from 'react';
import { Button, Flex, ButtonGroup, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LuHome } from 'react-icons/lu';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { FaRegPenToSquare } from 'react-icons/fa6';

const NavMenu = () => (
  <Flex
    as='nav'
    align='center'
    justify='center'
    w='100%'
    h='4.5rem'
    bg='cyan.400'
    position='fixed'
    bottom={0}
    zIndex={200}
    >
    <ButtonGroup>
      <ChakraLink to='/' as={Link}>
        <Button leftIcon={<LuHome />} bg='blue.50'>
          Home
        </Button>
      </ChakraLink>
      <ChakraLink to='/leaderboards' as={Link}>
        <Button leftIcon={<MdOutlineLeaderboard />} bg='blue.50'>
          Leaderboards
        </Button>
      </ChakraLink>
      <ChakraLink to='/add-thread' as={Link}>
        <Button leftIcon={<FaRegPenToSquare />} bg='blue.50'>
          New Thread
        </Button>
      </ChakraLink>
    </ButtonGroup>
  </Flex>
);

export default NavMenu;
