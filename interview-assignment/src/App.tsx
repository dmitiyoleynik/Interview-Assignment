import { Routes, Route } from 'react-router-dom';

import ShipListPage from 'src/pages/shipListPage';
import ShipInfo from 'src/pages/shipInfo';
import ErrorPage from 'src/pages/errorPage';

function App() {
  return (
    <Routes>
      <Route index element={<ShipListPage />} />
      <Route path='ships/:shipId' element={<ShipInfo />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
