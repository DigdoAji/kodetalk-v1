import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

const TagItem = ({ category, isSelected, onCategoryClick }) => {
  const [isActive, setIsActive] = useState(isSelected);

  useEffect(() => {
    setIsActive(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    setIsActive(!isActive);
    onCategoryClick(category);
  };

  return (
    <Button
      size='sm'
      isActive={isActive}
      colorScheme='gray.900'
      variant='outline'
      borderRadius='md'
      onClick={handleClick}
      _hover={{ bg: 'cyan.400', color: 'white' }}
    >
      {`#${category}`}
    </Button>
  );
};

TagItem.propTypes = {
  category: PropTypes.string,
  isSelected: PropTypes.bool,
  onCategoryClick: PropTypes.func,
};

export default TagItem;
