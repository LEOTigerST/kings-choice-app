import { useState, useEffect } from 'react';
import api from '../api';

export const useDestructionPool = () => {
  const [destroyCount, setDestroyCount] = useState<number>(0);

  useEffect(() => {
    const fetchDestroyCount = async () => {
      try {
        const response = await api.get('/app/battleGame/getDestroyCount');
        if (response.data && response.data.code === 200) {
          setDestroyCount(response.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch destruction pool:', error);
      }
    };

    fetchDestroyCount();
  }, []);

  return destroyCount;
};
