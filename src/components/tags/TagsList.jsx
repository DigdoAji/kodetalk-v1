import React from 'react';
import PropTypes from 'prop-types';
import { HStack } from '@chakra-ui/react';
import TagItem from './TagItem';

const TagsList = ({ tags, selectedCategory, onCategoryClick }) => {
  const uniqueCategory = tags
    .filter((value, index, self) => index === self
      .findIndex((tag) => tag.category === value.category));

  return (
    <HStack mt='1rem' wrap='wrap'>
      {uniqueCategory.map((tag) => (
        <TagItem
          key={tag.id}
          isSelected={selectedCategory === tag.category}
          onCategoryClick={onCategoryClick}
          {...tag}
        />
      ))}
    </HStack>
  );
};

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })),
  selectedCategory: PropTypes.string,
  onCategoryClick: PropTypes.func,
};

export default TagsList;
