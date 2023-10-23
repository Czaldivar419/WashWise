import { useState } from 'react';

const OrderForm = () => {
  // Define the state variables to store order information
  const [typeOfWash, setTypeOfWash] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/orders/new', {
        method: 'POST',
        body: JSON.stringify({
          typeOfWash,
          orderDate,
          additionalNotes,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // Order created successfully, handle success here.
        console.log('Order created successfully');
      } else {
        // Handle errors if necessary.
        console.error('Order creation failed');
      }
    } catch (error) {
      // Handle network or other errors.
      console.error('An error occurred:', error);
    }

    // Create an order object with the information
    const newOrder = {
      typeOfWash,
      orderDate,
      additionalNotes,
    };

    // Testing
    console.log('New Order:', newOrder);

    // Clear the form fields after submission
    setTypeOfWash('');
    setOrderDate('');
    setAdditionalNotes('');
  };

  return (
    <div className='bg-blue-300'>
      <h2>Place an Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type of Wash:</label>
          <input
            type="text"
            value={typeOfWash}
            onChange={(e) => setTypeOfWash(e.target.value)}
          />
        </div>
        <div>
          <label>Order Date and Time:</label>
          <input
            type="datetime-local"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
          />
        </div>
        <div>
          <label>Additional Notes:</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Create Order</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;