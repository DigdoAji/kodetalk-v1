import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toHaveValue } from '@testing-library/jest-dom/matchers';
import LoginFormInput from '../../src/components/auth/LoginFormInput';

expect.extend({ toHaveValue });

describe('LoginFormInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email address typing correctly', async () => {
    // Arrange
    render(
        <MemoryRouter>
            <LoginFormInput login={() => {}} />
        </MemoryRouter>,
    );
    const emailInput = await screen.getByPlaceholderText('user@example.com');

    // Action
    await userEvent.type(emailInput, 'usertest@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('usertest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
        <MemoryRouter>
            <LoginFormInput login={() => {}} />
        </MemoryRouter>,
    );
    const passwordInput = await screen.getByPlaceholderText('Must be at least 6 characters');

    // Action
    await userEvent.type(passwordInput, 'testpassword123');

    // Assert
    expect(passwordInput).toHaveValue('testpassword123');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(
        <MemoryRouter>
            <LoginFormInput login={mockLogin} />
        </MemoryRouter>,
    );
    const emailInput = await screen.getByPlaceholderText('user@example.com');
    await userEvent.type(emailInput, 'usertest@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Must be at least 6 characters');
    await userEvent.type(passwordInput, 'testpassword123');
    const loginButton = await screen.getByRole('button', { name: 'Sign In' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toHaveBeenCalled({
      email: 'usertest@gmail.com',
      password: 'testpassword123',
    });
  });
});
