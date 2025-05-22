import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';
import { toast } from 'react-toastify';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    
    if (result.success) {
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error(result.error);
    }
  };

  return (
    <Container component="main" maxWidth={false} className="login-container">
      <Box className="login-center-box">
        <Paper elevation={4} className="login-paper">
          <Typography component="h1" variant="h4" className="login-title">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} className="login-form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="login-submit"
              size="large"
            >
              Sign In
            </Button>
            <Box className="login-links">
              <Link to="/register" className="register-link">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 