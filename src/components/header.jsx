import React from 'react';
import { Typography } from '@mui/material';

function Header() {
  return (
    <Typography
      fontFamily="monospace"
      textTransform="uppercase"
      padding={2}
      bgcolor="#8294C4"
      color="white"
      textAlign="center">
      Autocomplete Search
    </Typography>
  );
}

export default Header;
