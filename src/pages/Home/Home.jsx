import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import FileCard from '../../components/FileCard';
import './Home.css';

const Home = () => {
  const [files, setFiles] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef();

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://localhost:7074/api/Files', {
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
    if (!user) {
      navigate('/login');
      return;
    }

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

  const handleUploadButtonClick = (e) => {
    if (!user) {
      navigate('/login');
      return;
    }
    fileInputRef.current.click();
  };

  const handleDownload = async (fileId) => {
    if (!user) {
      navigate('/login');
      return;
    }
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
    <div className="home-container">
      <div className="content-container">
        <Box className="upload-section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4, mb: 4 }}>
          <input
            type="file"
            id="file-upload"
            ref={fileInputRef}
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <Button
            variant="contained"
            className="upload-button"
            sx={{ minWidth: 180, minHeight: 48, fontSize: 18 }}
            onClick={handleUploadButtonClick}
          >
            Upload File
          </Button>
        </Box>
        <Typography variant="h5" className="file-list-title">All Files</Typography>
        <Grid container spacing={4} className="files-grid-modern">
          {files.map((file) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={file.id}>
              <FileCard
                file={file}
                onDownload={handleDownload}
                onDelete={handleDelete}
                showDelete={!!user}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home; 