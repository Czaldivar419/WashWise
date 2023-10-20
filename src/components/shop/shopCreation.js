import { useState } from 'react';

export default function ShopCreation() {
  const [name, setName] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/shopAPI/addShop', {
        method: 'POST',
        body: JSON.stringify({
          name,
          zipcode,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // Shop created successfully, handle success here.
        console.log('Shop created successfully');
      } else {
        // Handle errors if necessary.
        console.error('Shop creation failed');
      }
    } catch (error) {
      // Handle network or other errors.
      console.error('An error occurred:', error);
    }
  };


  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Shop Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Zipcode"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <button type="submit">Create Shop</button>
    </form>
  );
}
