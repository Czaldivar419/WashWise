import { useEffect, useState } from 'react';

export function useDataFetching(apiEndpoint) {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiEndpoint);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [apiEndpoint]);

  return data;
}