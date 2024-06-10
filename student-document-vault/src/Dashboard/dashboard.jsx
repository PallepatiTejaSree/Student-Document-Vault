import { Grid, Paper, Box, Typography, Container } from '@mui/material';
import InputFileUpload from './InputFileUpload';
import './dashboard.css';

const Dashboard = () => {
  const handleFileChange = () => {
    // Handle the file upload
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom className="section-title">
          Proof of Identification (POI) Documents
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {['Aadhar Card', 'PAN', 'Bank Passbook', 'Passport Size Photo'].map((label) => (
            <Grid item xs={12} sm={6} md={3} key={label}>
              <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom className="item-title">
                  {label}
                </Typography>
                <InputFileUpload onChange={handleFileChange} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom className="section-title">
          Educational Certificates
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {['SSC', 'Intermediate', '1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2'].map((label) => (
            <Grid item xs={12} sm={6} md={2.4} key={label}>
              <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom className="item-title">
                  {label}
                </Typography>
                <InputFileUpload onChange={handleFileChange} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom className="section-title">
          Resume
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom className="item-title">
                Resume
              </Typography>
              <InputFileUpload onChange={handleFileChange} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
