import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavMenu from '../components/navigation/NavMenu';

export default {
  title: 'Components/NavMenu',
  component: NavMenu,
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

const Template = () => <NavMenu />;
export const Default = Template.bind({});
