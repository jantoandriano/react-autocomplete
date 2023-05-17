import React from 'react';
import { InfoBox } from '@react-google-maps/api';
import { Box, Typography } from '@mui/material';

const MapInfo = (props) => {
  const { location, info } = props;

  const isPlaceExist = !info.address || !info.name;

  if (isPlaceExist) {
    return null;
  }

  return (
    <InfoBox options={{ closeBoxURL: '', enableEventPropagation: true }} position={location}>
      <Box
        padding={1}
        borderRadius={2}
        bgcolor="white"
        boxShadow={3}
        width={200}
        sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <Typography color="#00235B" variant="caption" fontWeight={700}>
          {info.name}
        </Typography>
        Address: {info.address}
      </Box>
    </InfoBox>
  );
};

export default MapInfo;
