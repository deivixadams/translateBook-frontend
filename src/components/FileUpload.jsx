import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Stack, Alert } from '@mui/material';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState(null);

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(`Archivo procesado: ${res.data.filename}`);
      setDownloadUrl(`http://127.0.0.1:5000/download/${res.data.filename}`);
    } catch (err) {
      setMessage('Error al procesar el archivo');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Button variant="contained" component="label" color="primary" sx={{ width: '100%', maxWidth: 300 }}>
        Elegir Archivo
        <input type="file" hidden onChange={onChange} />
      </Button>
      <Button variant="contained" color="secondary" onClick={onSubmit} disabled={!file} sx={{ width: '100%', maxWidth: 300 }}>
        Procesar Archivo
      </Button>
      {message && (
        <Alert severity="info" sx={{ width: '100%', maxWidth: 300, textAlign: 'center' }}>
          {message}
        </Alert>
      )}
      {downloadUrl && (
        <Button variant="outlined" color="success" href={downloadUrl} download sx={{ width: '100%', maxWidth: 300 }}>
          Descargar Archivo Procesado
        </Button>
      )}
    </Box>
  );
};

export default FileUpload;
