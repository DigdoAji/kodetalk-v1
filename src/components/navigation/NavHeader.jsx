import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Flex,
  Heading,
  Link as ChakraLink,
  Button,
  ButtonGroup,
  Avatar,
  Text,
} from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';

const NavHeader = ({ authUser, logOut }) => (
  <Flex
    as='header'
    py={5}
    px={{ base: 4, md: 14 }}
    w='100%'
    mx='auto'
    justify='space-between'
    align='center'
    borderBottom='1px'
    borderColor='gray.900'
  >
    <Heading as='h1' fontSize='3xl'>
    <ChakraLink
      as={Link} to='/'
      color='#48b3fc'
      _hover={{ textDecoration: 'none' }}
    >
      KodeTalk
    </ChakraLink>
    </Heading>
    <Flex align='center'>
    <Text
      as='b'
      mr={3}
      fontSize='18px'
      color='gray.800'
      cursor='default'
    >
      {authUser.name}
    </Text>
    <Avatar
      size='sm'
      mr={{ base: 3, sm: 4 }}
      name={authUser.name}
      src={authUser.avatar}
    />
    <ButtonGroup>
    <ChakraLink as={Link}>
      <Button
        title='Logout'
        color="white"
        border="2px"
        variant='solid'
        colorScheme='red'
        onClick={() => logOut()}
      >
      <MdLogout />
      </Button>
    </ChakraLink>
    </ButtonGroup>
    </Flex>
  </Flex>
);

NavHeader.propTypes = {
  authUser: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default NavHeader;
