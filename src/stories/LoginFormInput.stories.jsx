import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginFormInput from '../components/auth/LoginFormInput';

export default {
  title: 'Components/LoginFormInput',
  component: LoginFormInput,
  decorators: [
    (Story) => (
        <ChakraProvider>
            <MemoryRouter>
            <Story />
            </MemoryRouter>
        </ChakraProvider>
    ),
  ],
};

const Template = () => <LoginFormInput />;
export const Default = Template.bind({});
