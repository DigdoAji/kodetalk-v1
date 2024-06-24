import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Heading,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import RegisterFormInput from '../components/auth/RegisterFormInput';
import Logo from '../components/common/Logo';
import { asyncRegisterUser } from '../states/users/action';
import { asyncPreloadProcess } from '../states/isPreload/action';

const RegisterPage = () => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
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
          Register <span style={{ color: '#48b3fc' }}>KodeTalk</span> Account
        </Heading>
        <Text textAlign='center' fontSize='16px' mb='5'>
          Join <span style={{ color: '#48b3fc' }}>KodeTalk Community</span> &
          Unlock Your <span style={{ color: '#48b3fc' }}>Potential</span>
        </Text>
        <RegisterFormInput register={onRegister} />
      </Box>
    </Flex>
  );
};

export default RegisterPage;
