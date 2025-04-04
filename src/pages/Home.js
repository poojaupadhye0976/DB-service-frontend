import React from 'react';
import { Button, Box, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import landingImage from '../assets/p.jpg'; // Adjust path as needed

export default function Home() {

    
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'linear-gradient(to right, white 50%, rgba(79, 70, 229, 0.05))' // Subtle gradient
    }}>
      {/* Navigation Bar */}
      <Box sx={{ 
        py: 3, 
        px: 5, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
        backdropFilter: 'blur(5px)', // Frosted glass effect
        position: 'relative',
        zIndex: 2
      }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4f46e5' }}>1SPOC</Typography>
        <Box>
          <Button 
            variant="outlined" 
            onClick={() => navigate('/login')} 
            sx={{ mr: 2, color: '#4f46e5', borderColor: '#4f46e5' }}
          >
            Login
          </Button>
          <Button 
            variant="contained" 
            onClick={() => navigate('/register')}
            sx={{ backgroundColor: '#4f46e5', '&:hover': { backgroundColor: '#4338ca' } }}
          >
            Register
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        py: 8,
        position: 'relative',
        zIndex: 1
      }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ 
              fontWeight: 'bold', 
              mb: 3,
              lineHeight: 1.2,
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' }
            }}>
              Seamless Data, Effortless Access – Database as a Service on 1SPOC.
            </Typography>
            <Typography variant="h5" sx={{ 
              mb: 4, 
              color: '#4b5563',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              Empowering users to effortlessly create and manage databases and tables — all in one seamless platform.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/register')}
                sx={{ 
                  backgroundColor: '#4f46e5', 
                  '&:hover': { backgroundColor: '#4338ca' },
                  px: 4,
                  py: 1.5,
                  minWidth: '160px'
                }}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                onClick={() => navigate('/features')}
                sx={{ 
                  color: '#4f46e5', 
                  borderColor: '#4f46e5',
                  px: 4,
                  py: 1.5,
                  minWidth: '160px'
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              position: 'relative',
              height: '100%',
              minHeight: '400px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to left, rgba(255,255,255,0.3), rgba(255,255,255,0))',
                zIndex: 1,
                borderRadius: '16px'
              }
            }}>
              <img 
                src={landingImage} 
                alt="Data integration platform" 
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  filter: 'brightness(0.95) saturate(1.1)'
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ 
        py: 4, 
        backgroundColor: 'rgba(249, 250, 251, 0.8)', 
        textAlign: 'center',
        backdropFilter: 'blur(5px)'
      }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 1SPOC. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}