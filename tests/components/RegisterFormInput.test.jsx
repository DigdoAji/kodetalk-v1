import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toHaveValue } from '@testing-library/jest-dom/matchers';
import RegisterFormInput from '../../src/components/auth/RegisterFormInput';

expect.extend({ toHaveValue });

describe('RegisterFormInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
            <RegisterFormInput register={() => {}} />
      </MemoryRouter>,
    );
    const nameInput = await screen.getByPlaceholderText('Input your name');

    // Action
    await userEvent.type(nameInput, 'Hotaru Henshin');

    // Assert
    expect(nameInput).toHaveValue('Hotaru Henshin');
  });

  it('should handle email address typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
            <RegisterFormInput register={() => {}} />
      </MemoryRouter>,
    );
    const emailInput = await screen.getByPlaceholderText('user@example.com');

    // Action
    await userEvent.type(emailInput, 'hotaruhenshin@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('hotaruhenshin@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
            <RegisterFormInput register={() => {}} />
      </MemoryRouter>,
    );
    const passwordInput = await screen.getByPlaceholderText('Must be at least 6 characters');

    // Action
    await userEvent.type(passwordInput, 'samuelflyblaze');

    // Assert
    expect(passwordInput).toHaveValue('samuelflyblaze');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(
      <MemoryRouter>
            <RegisterFormInput register={mockRegister} />
      </MemoryRouter>,
    );
    const nameInput = await screen.getByPlaceholderText('Input your name');
    await userEvent.type(nameInput, 'Hotaru Henshin');
    const emailInput = await screen.getByPlaceholderText('user@example.com');
    await userEvent.type(emailInput, 'hotaruhenshin@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Must be at least 6 characters');
    await userEvent.type(passwordInput, 'samuelflyblaze');
    const registerButton = await screen.getByRole('button', { name: 'Sign Up' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toHaveBeenCalled({
      name: 'Hotaru Henshin',
      email: 'hotaruhenshin@gmail.com',
      password: 'samuelflyblaze',
    });
  });
});
