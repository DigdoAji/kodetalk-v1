import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavHeader from '../components/navigation/NavHeader';

export default {
  title: 'Components/NavHeader',
  component: NavHeader,
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

const Template = (args) => <NavHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
  authUser: {
    name: 'James Doe',
    avatar: 'https://generated-image-url.jpg',
  },
};
