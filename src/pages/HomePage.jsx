import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';
import TagsList from '../components/tags/TagsList';
import ThreadsList from '../components/threads/ThreadsList';
import { asyncPopulateThreadAndUsers } from '../states/shared/action';
import {
  asyncToggleDownVoteThread,
  asyncToggleUpVoteThread,
  asyncToggleNeutralVoteThread,
} from '../states/threads/action';

const HomePage = () => {
  const authUser = useSelector((state) => state.authUser);
  const users = useSelector((state) => state.users);
  const threads = useSelector((state) => state.threads);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThreadAndUsers());
  }, [dispatch]);

  const tagsList = threads.map((thread) => ({
    id: thread.id,
    category: thread.category,
  }));

  const filteredThreads = selectedCategory
    ? threads.filter((thread) => thread.category === selectedCategory)
    : threads;

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const onUpvoteThread = (threadId) => {
    dispatch(asyncToggleUpVoteThread(threadId));
  };

  const onDownVoteThread = (threadId) => {
    dispatch(asyncToggleDownVoteThread(threadId));
  };

  const onNeutralVoteThread = (threadId) => {
    dispatch(asyncToggleNeutralVoteThread(threadId));
  };

  return (
    <Box as='main' w='auto' my='2rem'>
      <Container as='section' maxW='6xl' pb='4rem'>
        <Box mb='2rem'>
          <Heading as='h2' fontSize='3xl' mt='1rem'>
            Popular <span style={{ color: '#48b3fc' }}>Tags</span>
          </Heading>
          <TagsList
            tags={tagsList}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
        </Box>
        <Box mb='2rem'>
          <Heading as='h2' align='center' fontSize='3xl' mt='2rem' mb='1.5rem'>
            <span style={{ color: '#48b3fc' }}>KodeTalk</span> Threads
          </Heading>
          <ThreadsList
            threads={threadList}
            authUserId={authUser.id}
            upVote={onUpvoteThread}
            downVote={onDownVoteThread}
            neutralVote={onNeutralVoteThread}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
