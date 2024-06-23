import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

const NotFound = () => (
  <Flex
    align='center'
    justify='center'
    direction='column'
    h='100vh'
    textAlign='center'
  >
    <Heading fontSize='9xl' color='#48b3fc'>
    404
    </Heading>
    <Text fontSize='2xl' fontWeight='bold' mb={4}>
    Nothing to See Here! Coders...
    </Text>
    <Text fontSize='lg' mb={8}>
    Page Not Found. Please Go back to{' '}
    <ChakraLink as={Link} to='/' color='#48b3fc' fontWeight={600}>
      Home Page
    </ChakraLink>{' '}
    </Text>
  </Flex>
);

export default NotFound;
