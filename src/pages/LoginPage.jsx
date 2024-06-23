import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Heading, Text, Flex, Box } from '@chakra-ui/react';
import LoginFormInput from '../components/auth/LoginFormInput';
import Logo from '../components/common/Logo';
import { asyncSetAuthUser } from '../states/authUser/action';
import { asyncPreloadProcess } from '../states/isPreload/action';

const LoginPage = () => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  if (authUser) {
    return <Navigate to="/" />;
  }

  return (
    <Flex
      as='section'
      bg='gray.100'
      w='full'
      align='center'
      h='100vh'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        w='full'
        p={6}
        maxWidth='500px'
        borderWidth={1}
        borderRadius={8}
        boxShadow='lg'
        bg='white'
      >
        <Logo width='70px' height='70px'/>
        <Heading as='h2' fontSize={'2xl'} textAlign='center' mb='2'>
          Welcome to <span style={{ color: '#48b3fc' }}>KodeTalk</span>
        </Heading>
        <Text textAlign='center' fontSize='16px' mb='5'>
          Login Account
        </Text>
        <LoginFormInput login={onLogin} />
      </Box>
    </Flex>
  );
};

export default LoginPage;
