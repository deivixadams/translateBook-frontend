import React, { useState } from 'react';
import { Box, Typography, Button, Alert, LinearProgress } from '@mui/material';
import axios from 'axios';

const Proceso = ({ setDownloadUrl }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    setIsProcessing(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const res = await axios.post(`${backendUrl}/upload`, formData, {  // Comillas invertidas para interpolación
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const fileUrl = `${backendUrl}/download/${res.data.filename}`;
      setMessage(`Archivo procesado: ${res.data.filename}`);
      setDownloadUrl(fileUrl);  // Añadir la URL del archivo al Sidebar
      setFile(null);  // Restablecer archivo
    } catch (err) {
      setMessage('Error al procesar el archivo');
    } finally {
      setIsProcessing(false);
    }
  };


  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: '#ffffff',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Proceso
      </Typography>
      <Button variant="contained" component="label" color="primary" sx={{ mt: 2 }}>
        Cargar Archivo
        <input type="file" hidden onChange={onChange} />
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={onSubmit}
        disabled={!file || isProcessing}
        sx={{ mt: 2 }}
      >
        Procesar Archivo
      </Button>
      {isProcessing && <LinearProgress sx={{ width: '100%', maxWidth: 300, mt: 2 }} />}
      {message && (
        <Alert severity="info" sx={{ width: '100%', maxWidth: 300, textAlign: 'center', mt: 2 }}>
          {message}
        </Alert>
      )}
    </Box>
  );
};

// Ensure the correct default export is provided here
export default Proceso;
