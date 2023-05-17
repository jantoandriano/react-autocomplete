import { useDispatch } from 'react-redux';
import { selectPlace } from './features/selected-place/slices';
import { MapContainer } from './components/map';
import useLoadAutocomplete from './hooks/useLoadAutocomplete';
import Searchbox from './components/searchbox';
import { useEffect } from 'react';
import Header from './components/header';
import SearchHistory from './components/search-history';

function App() {
  const dispatch = useDispatch();

  const { onLoad, inputRef } = useLoadAutocomplete();

  const onPlacesChanged = () => {
    const [places] = inputRef.current.getPlaces();

    if (places) {
      dispatch(
        selectPlace({
          location: [places.geometry.location.lat(), places.geometry.location.lng()],
          info: [places.name, places.formatted_address]
        })
      );
    }
  };

  return (
    <>
      <Header />
      <Searchbox onLoad={onLoad} onPlacesChanged={onPlacesChanged} />
      <SearchHistory />
      <MapContainer />
    </>
  );
}

export default App;
