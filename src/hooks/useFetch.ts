import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [url]);

  return {
    isLoading,
    error,
    data,
  };
};
