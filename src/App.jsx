import { MapContainer } from './components/map';
import Header from './components/header';
import SearchHistory from './components/search-history';
import InputSearch from './components/input-search';
import useAutoComplete from './hooks/useAutoComplete';

function App() {  
  useAutoComplete()

  return (
    <>
      <Header />
      <InputSearch />
      <SearchHistory />
      <MapContainer />
    </>
  );
}

export default App;
