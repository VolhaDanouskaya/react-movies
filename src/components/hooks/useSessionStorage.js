import { useEffect, useState } from 'react';

const useSessionStorage = (storageKey) => {
  const [value, setValue] = useState(sessionStorage.getItem(storageKey));

  useEffect(() => {
    sessionStorage.setItem(storageKey, value);
  }, [value]);

  return [value, setValue];
};

export default useSessionStorage;
