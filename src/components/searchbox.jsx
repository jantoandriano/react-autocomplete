import React from 'react';
import PropTypes from 'prop-types';
import { StandaloneSearchBox } from '@react-google-maps/api';
import { Box, TextField, Typography } from '@mui/material';

const Searchbox = (props) => {
  const { onLoad, onPlacesChanged } = props;
  return (
    <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
      <Box mb={1} mt={1} display="flex" justifyContent="center">
        <TextField size='small' sx={{ backgroundColor: 'white', width: 400 }} label="Places" />
      </Box>    
     </StandaloneSearchBox>
  );
 
};

Searchbox.propTypes = {
    onLoad: PropTypes.func,
    onPlacesChanged: PropTypes.func
}

export default Searchbox


