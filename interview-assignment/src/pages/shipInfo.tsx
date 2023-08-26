import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ships from 'src/ships';
import ShipDetailsCard from 'src/components/shipDetailsCard';

const ShipInfo: React.FC = () => {
  const navigate = useNavigate();
  const { shipId } = useParams();
  const ship = ships.find((s) => s.id === Number(shipId));

  useEffect(() => {
    if (!ship) {
      navigate('/error');
    }
  }, [navigate, ship]);

  return ship ? <ShipDetailsCard ship={ship} /> : <></>;
};

export default ShipInfo;
