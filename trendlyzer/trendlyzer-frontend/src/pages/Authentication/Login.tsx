import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    handleAuth({ userId: '1', isAuthenticated: true})
    navigate('/dashboard')
  }, [])

  return (
    <h1>Login</h1>
  )
}

export default Login;