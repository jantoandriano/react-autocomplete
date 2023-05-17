import React from 'react';
import { Box, TextField } from '@mui/material';

function InputSearch() {
  return (
    <Box display="flex" justifyContent='center' mt={2}>
      <TextField
        id="input"
        size="small"
        sx={{ backgroundColor: 'white', width: 400 }}
        label="Places"
      />
    </Box>
  );
}

export default InputSearch;
