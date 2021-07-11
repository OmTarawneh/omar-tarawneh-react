import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  return [response, error];
};

export default useFetch;
