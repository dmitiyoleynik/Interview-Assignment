import { Routes, Route } from 'react-router-dom';

import ShipListPage from 'src/pages/shipListPage';
import ShipInfo from 'src/pages/shipInfo';
import ErrorPage from 'src/pages/errorPage';
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import useStore from 'src/store';

const App: React.FC = () => {
  const store = useStore();
  useEffect(() => {
    store.fetchShips();
  }, []);

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<ShipListPage />} />
        <Route path='ships/:shipId' element={<ShipInfo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
