import React from 'react';
import { Button, Box, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Box textAlign="center" mt={8}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography mt={2}>Welcome, Superadmin!</Typography>
      <Button variant="contained" sx={{ mt: 4 }}>
        Add Users
      </Button>
    </Box>
  );
}
