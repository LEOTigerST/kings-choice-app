import { useState, useEffect } from 'react';
import api from '../api';

interface ResultVoInteger {
  code: number;
  message: string;
  data: number;
  success: boolean;
}

export const useDestructionPool = () => {
  const [destroyCount, setDestroyCount] = useState<number>(0);

  useEffect(() => {
    const fetchDestroyCount = async () => {
      try {
        const response = await api.get<ResultVoInteger>('/app/battleGame/getDestroyCount');
        if (response.data && response.data.code === 200 && response.data.success) {
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
