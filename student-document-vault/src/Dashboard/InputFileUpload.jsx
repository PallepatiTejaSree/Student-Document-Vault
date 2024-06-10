import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

// eslint-disable-next-line react/prop-types
export default function InputFileUpload({ onChange }) {
  const [fileName, setFileName] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(event);
    }
  };

  return (
    <Box textAlign="center">
      {fileName && (
        <Box mb={2} sx={{ width: '100%', maxWidth: '200px', margin: '0 auto' }}>
          <Typography
            variant="subtitle1"
            noWrap
            sx={{ 
              textOverflow: 'ellipsis', 
              overflow: 'hidden', 
              whiteSpace: 'nowrap',
              display: 'block',
            }}
          >
            {fileName}
          </Typography>
        </Box>
      )}
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        {fileName ? "Re-upload" : "Upload file"}
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
    </Box>
  );
}
