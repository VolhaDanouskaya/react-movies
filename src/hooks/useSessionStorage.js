import { useEffect, useState } from 'react';

const useSessionStorage = (storageKey) => {
  const [value, setValue] = useState(
    typeof window !== 'undefined' ? sessionStorage.getItem(storageKey) : 'All'
  );

  useEffect(() => {
    if (value) {
      sessionStorage.setItem(storageKey, value);
    }
  }, [value, storageKey]);

  return [value, setValue];
};

export default useSessionStorage;
