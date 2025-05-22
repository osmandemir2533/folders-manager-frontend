import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';
import { toast } from 'react-toastify';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    const result = await register(username, password);
    
    if (result.success) {
      toast.success('Registration successful! Please login.');
      navigate('/login');
    } else {
      toast.error(result.error);
    }
  };

  return (
    <Container component="main" maxWidth={false} className="register-container">
      <Box className="register-center-box">
        <Paper elevation={4} className="register-paper">
          <Typography component="h1" variant="h4" className="register-title">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} className="register-form">
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
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="register-submit"
              size="large"
            >
              Sign Up
            </Button>
            <Box className="register-links">
              <Link to="/login" className="login-link">
                {"Already have an account? Sign In"}
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register; 