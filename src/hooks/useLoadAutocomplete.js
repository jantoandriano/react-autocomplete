import { useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';


function useLoadAutocomplete() {
  useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  });

  const inputRef = useRef();

  const onLoad = (ref) => {
    inputRef.current = ref;
  };

  return {
    onLoad,
    inputRef,
  };
}

export default useLoadAutocomplete;
