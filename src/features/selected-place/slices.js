import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: [],
  location: { lat: 48.8584, lng: 2.2945 },
  info: {
    name: '',
    address: ''
  }
};

export const selectedPlace = createSlice({
  name: 'selected-place',
  initialState,
  reducers: {
    selectPlace: (state, action) => {
      const [lat, lng] = action.payload.location;
      const [name, address] = action.payload.info;

      state.history.push(name)
      state.location = { lat, lng };
      state.info = { name, address };
    }
  }
});

export const { selectPlace } = selectedPlace.actions;

export default selectedPlace.reducer;
