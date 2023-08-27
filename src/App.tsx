import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import ShipListPage from 'src/pages/shipListPage';
import ShipInfo from 'src/pages/shipInfo';
import ErrorPage from 'src/pages/errorPage';
import useStore from 'src/store';

const App: React.FC = () => {
  const store = useStore();
  useEffect(() => {
    store.fetchShips();
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route index element={<ShipListPage />} />
        <Route path='ships/:shipId' element={<ShipInfo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
