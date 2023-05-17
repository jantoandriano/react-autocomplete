import { GoogleMap, Marker } from '@react-google-maps/api';
import { useSelectorSelectedPlace } from '../features/selected-place/selectors';
import MapInfo from './map-info';

export const MapContainer = () => {
  const { location, info } = useSelectorSelectedPlace();
  return (
    <>
      <GoogleMap
        center={location}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%', position: 'absolute' }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false
        }}>
        <MapInfo location={location} info={info} />
        <Marker position={location} />
      </GoogleMap>
    </>
  );
};
