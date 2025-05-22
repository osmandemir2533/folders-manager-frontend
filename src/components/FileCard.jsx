import { Card, CardContent, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import './FileCard.css';

const iconMap = {
  'application/pdf': <PictureAsPdfIcon className="file-svg" style={{ color: '#e53935' }} fontSize="large" />,
  'image/png': <ImageIcon className="file-svg" style={{ color: '#43a047' }} fontSize="large" />,
  'image/jpeg': <ImageIcon className="file-svg" style={{ color: '#43a047' }} fontSize="large" />,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': <DescriptionIcon className="file-svg" style={{ color: '#1976d2' }} fontSize="large" />,
};

const FileCard = ({ file, onDownload, onDelete, showDelete }) => {
  const icon = iconMap[file.contentType] || <InsertDriveFileIcon className="file-svg" style={{ color: '#888' }} fontSize="large" />;

  return (
    <Card className="file-card-modern" elevation={3}>
      <CardContent>
        <Box className="file-card-icon-box">{icon}</Box>
        <Typography variant="subtitle1" className="file-card-name" title={file.fileName}>
          {file.fileName}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="file-card-date">
          {new Date(file.uploadDate).toLocaleDateString()}
        </Typography>
        <Box
          className="file-card-actions"
          sx={{
            display: 'flex',
            justifyContent: showDelete ? 'space-between' : 'center',
            gap: 1,
          }}
        >
          <Button variant="outlined" size="small" onClick={() => onDownload(file.id)}>
            Download
          </Button>
          {showDelete && (
            <Button variant="outlined" color="error" size="small" onClick={() => onDelete(file.id)}>
              Delete
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default FileCard; 