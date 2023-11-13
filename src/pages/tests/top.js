import { useDataFetching } from './random';

export default function ChildComponent() {
  const data = useDataFetching('/api/shopAPI/getShops');

  // Check if data exists before rendering
  if (!data) {
    return null; // or loading indicator
  }

  return (
    <div>
      <h2>Name: {data.name}</h2>
      <p>Bio: {data.bio}</p>
      <p>Address: {data.address}</p>
      {/* Render other properties as needed */}
    </div>
  );
}