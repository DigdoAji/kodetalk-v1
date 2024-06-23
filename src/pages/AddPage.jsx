import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Heading } from '@chakra-ui/react';
import { asyncAddThread } from '../states/threads/action';
import ThreadFormInput from '../components/threads/ThreadFormInput';

const AddPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreate = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <Box as='main' w='auto' py='2rem'>
      <Container as='section' maxW='6xl' pb='7rem'>
        <Box as='header'>
          <Heading as='h2' align='center' fontSize='3xl' mt='1rem' mb={6}>
            Create New Thread
          </Heading>
        </Box>
        <ThreadFormInput addThread={onCreate} />
      </Container>
    </Box>
  );
};

export default AddPage;
