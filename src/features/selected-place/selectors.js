import { useSelector } from 'react-redux';

export const useSelectorSelectedPlace = () => {
  const location = useSelector((state) => state.selectedPlace.location);
  const history = useSelector((state) => state.selectedPlace.history);
  const info = useSelector((state) => state.selectedPlace.info);

  return {
    location,
    history,
    info
  };
};
