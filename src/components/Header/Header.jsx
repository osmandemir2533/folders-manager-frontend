import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem, Box } from '@mui/material';
import { useState } from 'react';
import './Header.css';
import { FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const { user, username, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };

  const handleDashboard = () => {
    handleClose();
    navigate('/dashboard');
  };

  const displayName = username || "Kullanıcı";

  return (
    <AppBar position="static" className="header" elevation={0}>
      <Toolbar className="header-toolbar">
        <Box className="header-logo-box" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h5" className="logo">
            <Link to="/" className="logo-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="logo-accent">File</span>Manager
            </Link>
          </Typography>
        </Box>
        <Box className="header-right" sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {user ? (
            <>
              <Link to="/contact" className="contact-link" style={{
                display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: '#1976d2', fontWeight: 600, fontSize: 18
              }}>
                <Box sx={{
                  width: 32, height: 32, borderRadius: '50%', background: '#e3f0fc', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1
                }}>
                  <FaEnvelope size={18} color="#1976d2" />
                </Box>
                İletişim
              </Link>
              <Link to="/about" className="about-link" style={{
                display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: '#1976d2', fontWeight: 600, fontSize: 18, marginRight: 24
              }}>
                <Box sx={{
                  width: 32, height: 32, borderRadius: '50%', background: '#e3f0fc', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1
                }}>
                  <FaInfoCircle size={18} color="#1976d2" />
                </Box>
                Hakkında
              </Link>
              <Box sx={{ display: 'flex', alignItems: 'center', minHeight: 64, overflow: 'visible' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                    background: '#fff',
                    borderRadius: '16px',
                    px: 2,
                    py: 1,
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
                    zIndex: 2,
                    transition: 'box-shadow 0.2s',
                    '&:hover': {
                      boxShadow: '0 4px 16px rgba(25, 118, 210, 0.16)',
                      background: '#f5faff'
                    }
                  }}
                  onClick={(event) => handleMenu(event)}
                >
                  <Avatar
                    className="avatar"
                    sx={{ bgcolor: '#1976d2', color: '#fff', fontWeight: 700 }}
                  >
                    {user.username?.[0]?.toUpperCase()}
                  </Avatar>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: '#1976d2',
                      fontSize: '1.1rem',
                      minWidth: '80px',
                      textAlign: 'center',
                      ml: 1
                    }}
                    className="username-text"
                  >
                    {displayName}
                  </Typography>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Link to="/contact" className="contact-link" style={{
                display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: '#1976d2', fontWeight: 600, fontSize: 18
              }}>
                <Box sx={{
                  width: 32, height: 32, borderRadius: '50%', background: '#e3f0fc', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1
                }}>
                  <FaEnvelope size={18} color="#1976d2" />
                </Box>
                İletişim
              </Link>
              <Link to="/about" className="about-link" style={{
                display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: '#1976d2', fontWeight: 600, fontSize: 18, marginRight: 24
              }}>
                <Box sx={{
                  width: 32, height: 32, borderRadius: '50%', background: '#e3f0fc', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1
                }}>
                  <FaInfoCircle size={18} color="#1976d2" />
                </Box>
                Hakkında
              </Link>
              <Button color="inherit" component={Link} to="/login" className="header-btn">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register" className="header-btn">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 