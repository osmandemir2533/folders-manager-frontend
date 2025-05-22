import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import FileCard from '../../components/FileCard';
import './Dashboard.css';
import { jwtDecode } from 'jwt-decode';

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchFiles();
  }, [user, navigate]);

  const fetchFiles = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://localhost:7074/api/Files/my', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setFiles(response.data);
    } catch (error) {
      toast.error('Failed to fetch files');
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      await axios.post('https://localhost:7074/api/Files/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('File uploaded successfully!');
      fetchFiles();
    } catch (error) {
      toast.error('Failed to upload file');
    }
  };

  const handleDownload = async (fileId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://localhost:7074/api/Files/download/${fileId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', files.find(f => f.id === fileId)?.fileName || 'file');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      toast.error('Failed to download file');
    }
  };

  const handleDelete = async (fileId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://localhost:7074/api/Files/${fileId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success('File deleted successfully!');
      fetchFiles();
    } catch (error) {
      toast.error('Failed to delete file');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="content-container">
        <Typography variant="h4" className="dashboard-title">
          My Files
        </Typography>
        <Box className="upload-section">
          <input
            type="file"
            id="file-upload"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <label htmlFor="file-upload">
            <Button
              variant="contained"
              component="span"
              className="upload-button"
            >
              Upload New File
            </Button>
          </label>
        </Box>
        <Grid container spacing={4} className="files-grid-modern">
          {files.map((file) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={file.id}>
              <FileCard
                file={file}
                onDownload={handleDownload}
                onDelete={handleDelete}
                showDelete={true}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard; 