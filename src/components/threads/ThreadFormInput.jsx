import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Input,
  Stack,
  Textarea,
  FormLabel,
} from '@chakra-ui/react';
import useInput from '../../hooks/useInput';

const ThreadFormInput = ({ addThread }) => {
  const [title, setTitleChange] = useInput('');
  const [category, setCategoryChange] = useInput('');
  const [body, setBodyChange] = useInput('');

  const handleSubmit = () => addThread({ title, body, category });

  return (
    <Box as='form'>
      <Stack>
        <FormLabel fontSize={18} ml={1} mb={0}>Title</FormLabel>
        <Input
          focusBorderColor='cyan.400'
          placeholder='Input your title here'
          value={title}
          onChange={setTitleChange}
          mb='0.5rem'
        />
        <FormLabel fontSize={18} ml={1} mb={0}>Tag / Category</FormLabel>
        <Input
          focusBorderColor='cyan.400'
          placeholder='Input your tag here'
          value={category}
          onChange={setCategoryChange}
          mb='0.5rem'
        />
        <FormLabel fontSize={18} ml={1} mb={0}>Description</FormLabel>
        <Textarea
          focusBorderColor='cyan.400'
          placeholder='Input your description here'
          resize='none'
          h={180}
          value={body}
          onChange={setBodyChange}
          mb='0.5rem'
        />
      </Stack>
      <Button
        w='full'
        h='3rem'
        mt='6'
        fontSize={20}
        fontWeight={700}
        color='white'
        variant='solid'
        colorScheme='cyan'
        type='button'
        onClick={handleSubmit}
      >
        Submit Thread
      </Button>
    </Box>
  );
};

ThreadFormInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadFormInput;
