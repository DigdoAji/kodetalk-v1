import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Box,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import useInput from '../../hooks/useInput';

const LoginFormInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickVisibility = () => setShowPassword(!showPassword);
  const handleLogin = () => login({ email, password });

  return (
      <Box as='form'>
        <FormControl mt={4} id='email' isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            focusBorderColor='cyan.400'
            value={email}
            onChange={onEmailChange}
            placeholder='user@example.com'
          />
        </FormControl>
        <FormControl mt={4} id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              focusBorderColor='cyan.400'
              value={password}
              onChange={onPasswordChange}
              placeholder='Must be at least 6 characters'
            />
            <InputRightElement width='3.5rem'>
              <Button h='2rem' size='sm' onClick={handleClickVisibility}>
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          w='full'
          mt='10'
          color='white'
          bg='#48b3fc'
          variant='solid'
          _hover={{
            bg: 'white',
            border: '2px',
            bordercolor: '#48b3fc',
            color: '#48b3fc',
          }}
          fontWeight='bold'
          type='button'
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Text mt={4} mb={2} textAlign='center'>
        Don&apos;t have an account?{' '}
          <ChakraLink
            as={Link}
            to={'/register'}
            color='#48b3fc'
            fontWeight={600}
          >
            Register Now
          </ChakraLink>
        </Text>
      </Box>
  );
};

LoginFormInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginFormInput;
