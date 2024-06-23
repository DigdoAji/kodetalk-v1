import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toHaveValue } from '@testing-library/jest-dom/matchers';
import CommentFormInput from '../../src/components/threads/comments/CommentFormInput';

expect.extend({ toHaveValue });

describe('CommentFormInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle comment typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
            <CommentFormInput comment={() => {}} />
      </MemoryRouter>,
    );
    const commentInput = await screen.getByRole('textbox', { placeholder: 'Write your comment here...' });

    // Action
    await userEvent.type(commentInput, 'This is the first comment');

    // Assert
    expect(commentInput).toHaveValue('This is the first comment');
  });

  it('should call comment function when submit button is clicked', async () => {
    // Arrange
    const attemptComment = vi.fn();
    render(
      <MemoryRouter>
            <CommentFormInput comment={attemptComment} />
      </MemoryRouter>,
    );
    const commentInput = await screen.getByRole('textbox', { placeholder: 'Write your comment here...' });
    await userEvent.type(commentInput, 'This is the first comment');
    const submitButton = await screen.getByRole('button', { name: 'Send Comment' });

    // Action
    await userEvent.click(submitButton);

    // Assert
    expect(attemptComment).toHaveBeenCalled({
      content: 'This is the first comment',
    });
  });
});
