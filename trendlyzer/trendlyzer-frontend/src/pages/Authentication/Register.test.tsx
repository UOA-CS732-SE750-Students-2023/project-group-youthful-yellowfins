/**
 * Purpose: This files contain test cases for register page 
 **/
import React from 'react';
import { render } from '@testing-library/react';
import Register from './Register';
import { AuthContext } from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

describe('Register component', () => {
  const authState = {
    loading: false,
    authError: null,
  };
  const handleRegisterMethod = jest.fn(() => Promise.resolve());
  const handleGoogleAuth = jest.fn(() => Promise.resolve());

  it('should render the component with form inputs and button', () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ auth: authState, handleRegisterMethod, handleGoogleAuth }}>
          <Register />
        </AuthContext.Provider>
      </BrowserRouter>,
    );

    const firstNameInput = getByText('First name');
    const lastNameInput = getByText('Last name');
    const emailInput = getByText('Email Address');
    const passwordInput = getByText('Password');
    const submitButton = getByRole('button', { name: 'Sign Up' });

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
