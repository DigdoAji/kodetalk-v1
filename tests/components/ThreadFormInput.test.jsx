/**
 *  Test scenario for ThreadFormInput component
 * - should handle title typing correctly
 * - should handle category typing correctly
 * - should handle body typing correctly
 * - should call addThread function when submit button is clicked
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toHaveValue } from '@testing-library/jest-dom/matchers';
import ThreadFormInput from '../../src/components/threads/ThreadFormInput';

expect.extend({ toHaveValue });

describe('ThreadFormInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(
        <MemoryRouter>
            <ThreadFormInput addThread={() => {}} />
        </MemoryRouter>,
    );
    const titleInput = await screen.getByPlaceholderText('Input your title here');

    // Action
    await userEvent.type(titleInput, 'First Title Thread');

    // Assert
    expect(titleInput).toHaveValue('First Title Thread');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(
        <MemoryRouter>
            <ThreadFormInput addThread={() => {}} />
        </MemoryRouter>,
    );
    const categoryInput = await screen.getByPlaceholderText('Input your tag here');

    // Action
    await userEvent.type(categoryInput, 'React Tag');

    // Assert
    expect(categoryInput).toHaveValue('React Tag');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(
        <MemoryRouter>
            <ThreadFormInput addThread={() => {}} />
        </MemoryRouter>,
    );
    const bodyInput = await screen.getByPlaceholderText('Input your description here');

    // Action
    await userEvent.type(bodyInput, 'This is the first thread');

    // Assert
    expect(bodyInput).toHaveValue('This is the first thread');
  });

  it('should call addThread function when submit button is clicked', async () => {
    // Arrange
    const mockAddThread = vi.fn();
    render(
        <MemoryRouter>
            <ThreadFormInput addThread={mockAddThread} />
        </MemoryRouter>,
    );
    const titleInput = await screen.getByPlaceholderText('Input your title here');
    await userEvent.type(titleInput, 'First Title Thread');
    const categoryInput = await screen.getByPlaceholderText('Input your tag here');
    await userEvent.type(categoryInput, 'React Tag');
    const bodyInput = await screen.getByPlaceholderText('Input your description here');
    await userEvent.type(bodyInput, 'This is the first thread');
    const submitButton = await screen.getByRole('button', { name: 'Submit Thread' });

    // Action
    await userEvent.click(submitButton);

    // Assert
    expect(mockAddThread).toHaveBeenCalled({
      title: 'First Title Thread',
      category: 'React Tag',
      body: 'This is the first thread',
    });
  });
});
