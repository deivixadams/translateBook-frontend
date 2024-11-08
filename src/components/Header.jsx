import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => (
  <AppBar position="static" sx={{ paddingY: 1, bgcolor: '#1976d2', width: '100vw', left: 0 }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <HomeIcon sx={{ color: 'white' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left', color: 'white' }}>
          Traductor de Libros
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" aria-label="show notifications" color="inherit">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {/* Avatar */}
        <Avatar alt="User Avatar" src="/static/images/1.jpg" sx={{ width: 24, height: 24 }} />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
