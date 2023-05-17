import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useSelectorSelectedPlace } from '../features/selected-place/selectors';

function SearchHistory() {
  const { history } = useSelectorSelectedPlace();

  const recentSearch = history.length ? true : false

  return (
    <Box display="flex" justifyContent="center" mb={2} mt={1}>
      <ButtonGroup size="small" variant="text" aria-label="text button group">
        {recentSearch && history.map(val => (
            <Button>{val}</Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default SearchHistory;
