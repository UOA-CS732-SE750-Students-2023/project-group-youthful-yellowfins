import React, { useState } from 'react';

interface LoginProps {
  onFormSwitch: (form: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onFormSwitch }) => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          type='email'
          placeholder='youremail@gmail.com'
          id='email'
          name='email'
        />
        <label htmlFor='password'>password</label>
        <input
          value={pass}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
          type='password'
          placeholder='********'
          id='password'
          name='password'
        />
        <button type='submit'>Log In</button>
      </form>
      <button className='link-btn' onClick={() => onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};
