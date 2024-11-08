import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Placeholder for TikTok

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: '#d3d3d3',
      color: 'black',
      paddingY: 2,
      textAlign: 'left',
      pl: 2,
      width: '100%',
      position: 'relative',
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',  // Center content horizontally
    }}
  >
    <Typography variant="body2" sx={{ mb: 1 }}>by Siviedeif</Typography>

    {/* Social Media Icons */}
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <IconButton
        href="https://www.youtube.com/@LiderAprende"
        target="_blank"
        rel="noopener"
      >
        <YouTubeIcon sx={{ color: '#FF0000' }} />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/deiadams/"
        target="_blank"
        rel="noopener"
      >
        <LinkedInIcon sx={{ color: '#0077b5' }} />
      </IconButton>
      <IconButton
        href="https://www.tiktok.com/@lideraprende"
        target="_blank"
        rel="noopener"
      >
        <MusicNoteIcon sx={{ color: 'black' }} />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
