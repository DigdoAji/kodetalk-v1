import { Box } from '@chakra-ui/react';
import LoadingBar from 'react-redux-loading-bar';

const Loading = () => (
    <Box position="sticky" top={0} zIndex={9999}>
        <LoadingBar
          style={{
            backgroundColor: '#00A3C4',
          }}
        />
    </Box>
);

export default Loading;
