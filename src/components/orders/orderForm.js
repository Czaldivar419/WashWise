import { useState } from 'react';
import { getSession } from 'next-auth/react';

export default function OrderForm({ shop }) {
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState(''); // Initialize the 'name' state

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const session = await getSession(); // Get the user's session

    if (!session) {
      console.error('User not authenticated');
      return;
    }

    try {
      const response = await fetch('/api/orders/new', {
        method: 'POST',
        body: JSON.stringify({
          userId: session.user.id,
          name,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Shop created successfully, handle success here.
        console.log('Wash requested successfully');
      } else {
        // Handle errors if necessary.
        console.error('Wash request failed');
      }
    } catch (error) {
      // Handle network or other errors.
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-whole bg-gray-300 position-fixed fixed inset-8 justify-center opacity-95">
            <div id="modal-header" className='text-center text-3xl p-4'>
              <h2>Request a Wash</h2>
            </div>
            <div className=' p-4' id="modal-body">
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  className='m-2 rounded'
                  type="text"
                  placeholder="Shop Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <button onClick={closeModal} className="m-2 rounded bg-red-500 text-white p-2">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

