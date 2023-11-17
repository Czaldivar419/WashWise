import { useEffect, useState } from 'react';

export function useDataFetchParams(apiEndpoint, params) {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const queryParams = new URLSearchParams(params).toString();
        const response = await fetch(`${apiEndpoint}?${queryParams}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [apiEndpoint, JSON.stringify(params)]); // Use JSON.stringify to create a string representation of the params object

  return data;
}
