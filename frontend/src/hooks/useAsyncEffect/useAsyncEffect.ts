/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

const useAsyncEffect = (callback: () => void): void => {
  useEffect(() => {
    callback();
  }, []);
};

export default useAsyncEffect;
