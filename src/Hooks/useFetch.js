import { useState, useEffect } from 'react';

/**
 * Custom Hook that accept a API url and send GET request and return the data.
 *
 * @function
 * @param {string} url  API url to fetch.
 *
 * @returns {Array}     array of data and loading.
 */
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    let canceled = false;
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      if (!canceled) {
        setResponse(json);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      canceled = true;
    };
  }, [url]);
  return [response, loading];
};

export default useFetch;
