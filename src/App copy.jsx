import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header with Menu Options */}
      <AppBar position="static" sx={{ paddingY: 1, bgcolor: '#1976d2', width: '100vw', left: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Traductor de Libros
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              href="https://siviedeif.com/aulavirtual/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#ffeb3b',
                  textDecoration: 'underline',
                  transition: 'color 0.3s ease',
                },
              }}
            >
              Home
            </Button>
            <Button
              href="https://www.linkedin.com/in/deiadams/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#ffeb3b',
                  textDecoration: 'underline',
                  transition: 'color 0.3s ease',
                },
              }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          bgcolor: '#f5f5f5',
          width: '100vw',
          p: 3,
        }}
      >
        {/* Left Sidebar */}
        <Box
          sx={{
            width: { xs: '100%', sm: '40%', md: '300px' },
            bgcolor: '#e0e0e0',
            padding: 2,
            mr: { xs: 0, sm: 3 },
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Typography variant="h5" gutterBottom>
            Histórico de traducciones
          </Typography>
          {/* Aquí irán los elementos del historial */}
        </Box>

        {/* Right Process Section */}
        <Box sx={{ flexGrow: 1, bgcolor: '#ffffff', padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Proceso
          </Typography>
          {/* Aquí irá el contenido del proceso */}
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: '#d3d3d3', color: 'black', paddingY: 2, textAlign: 'left', pl: 2, width: '100vw' }}>
        <Typography variant="body2">by Siviedeif</Typography>
      </Box>
    </Box>
  );
};

export default App;
