import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from '@chakra-ui/react';

const Logo = ({ width, height }) => (
    <Flex mb='2' justifyContent="center">
        <Image
            as={Image}
            src='./kodetalk.png'
            alt='KodeTalk Logo'
            w={width}
            h={height}
        />
    </Flex>
);

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
