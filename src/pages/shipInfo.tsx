import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ShipDetailsCard from 'src/components/shipDetailsCard';
import useStore from 'src/store';

const ShipInfo: React.FC = () => {
  const navigate = useNavigate();
  const { shipId } = useParams();
  const ship = useStore().ships.find((s) => s.id === Number(shipId));

  useEffect(() => {
    if (!ship) {
      navigate('/error');
    }
  }, [navigate, ship]);

  return ship ? <ShipDetailsCard ship={ship} /> : null;
};

export default ShipInfo;
