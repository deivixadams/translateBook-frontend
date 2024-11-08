import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Sidebar = ({ processedFiles }) => (
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
      Histórico
    </Typography>

    {processedFiles.length > 0 ? (
      processedFiles.map((url, index) => (
        <Link
          key={index}
          href={url}
          download
          underline="hover"
          variant="body1"
          color="primary"
          sx={{ display: 'block', mt: 1 }}
        >
          Descargar archivo {index + 1}
        </Link>
      ))
    ) : (
      <Typography variant="body2" color="textSecondary">
        No hay archivos disponibles para descargar.
      </Typography>
    )}
  </Box>
);

export default Sidebar;
