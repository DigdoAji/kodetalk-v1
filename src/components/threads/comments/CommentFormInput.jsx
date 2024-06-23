import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardBody,
  Textarea,
} from '@chakra-ui/react';
import useInput from '../../../hooks/useInput';

const CommentFormInput = ({ comment }) => {
  const [content, setContent, setValue] = useInput();

  const handleSubmit = () => {
    comment({ content });
    setValue('');
  };

  return (
    <Box>
      <Card border="none" boxShadow="none">
        <CardBody>
          <Textarea
            bg='white'
            focusBorderColor='cyan.400'
            placeholder='Write your comment here...'
            resize='none'
            h={180}
            value={content}
            onChange={setContent}
          />
          <Button
            w='full'
            size='lg'
            mt={6}
            fontSize={20}
            fontWeight='bold'
            color='white'
            variant='solid'
            colorScheme='cyan'
            type='button'
            onClick={() => handleSubmit()}
          >
            Send Comment
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
};

CommentFormInput.propTypes = {
  comment: PropTypes.func,
};

export default CommentFormInput;
