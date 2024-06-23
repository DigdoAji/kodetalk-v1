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

const RegisterFormInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickVisibility = () => setShowPassword(!showPassword);
  const handleRegister = () => register({ name, email, password });

  return (
    <Box as='form'>
      <FormControl mt={4} id='name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type='text'
          focusBorderColor='cyan.400'
          value={name}
          onChange={onNameChange}
          placeholder='Input your name'
        />
      </FormControl>
      <FormControl mt={4} id='email' isRequired>
        <FormLabel>Email address</FormLabel>
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
            focusBorderColor='cyan.400'
            type={showPassword ? 'text' : 'password'}
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
        onClick={handleRegister}
      >
        Sign Up
      </Button>
      <Text mt={4} mb={2} textAlign='center'>
        Already have an account?{' '}
        <ChakraLink
          as={Link}
          to={'/login'}
          color={'#48b3fc'}
          fontWeight={600}
        >
          Sign In
        </ChakraLink>
      </Text>
    </Box>
  );
};

RegisterFormInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterFormInput;
