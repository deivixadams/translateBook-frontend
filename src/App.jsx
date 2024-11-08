import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Proceso from './components/Proceso';
import Footer from './components/Footer';

const App = () => {
  const [processedFiles, setProcessedFiles] = useState([]);

  // Function to add a new processed file to the list
  const handleNewFile = (fileUrl) => {
    setProcessedFiles((prevFiles) => [...prevFiles, fileUrl]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Pass the list of processed files to Sidebar */}
        <Sidebar processedFiles={processedFiles} />
        <Proceso setDownloadUrl={handleNewFile} />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
