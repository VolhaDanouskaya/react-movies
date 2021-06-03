import { useEffect, useState } from 'react'

const useSessionStorage = (storageKey) => {
  const [value, setValue] = useState(sessionStorage.getItem(storageKey))

  useEffect(() => {
    if (value) {
      sessionStorage.setItem(storageKey, value)
    }
  }, [value, storageKey])

  return [value, setValue]
}

export default useSessionStorage
