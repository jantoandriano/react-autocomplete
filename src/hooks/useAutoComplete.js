import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectPlace } from '../features/selected-place/slices';

function useAutoComplete() {
  const dispatch = useDispatch();
  
  let autocomplete;

  useEffect(() => {
    autocomplete = new google.maps.places.Autocomplete(document.getElementById('input'), {});
    autocomplete.addListener('place_changed', handlePlaceChanged);
  }, []);

  function handlePlaceChanged() {
    let addressObject = autocomplete.getPlace();
    dispatch(
      selectPlace({
        location: [addressObject.geometry.location.lat(), addressObject.geometry.location.lng()],
        info: [addressObject.name, addressObject.formatted_address]
      })
    );
  }

}

export default useAutoComplete;
