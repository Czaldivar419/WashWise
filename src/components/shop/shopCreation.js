import { useState } from 'react';
import { getSession } from 'next-auth/react';

export default function ShopCreation() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [images, setImages] = useState('');
  const [laundryServices, setLaundryServices] = useState('');
  const [availableBrands, setAvailableBrands] = useState('');

  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const session = await getSession(); // Get the user's session

    if (!session) {
      console.error('User not authenticated');
      return;
    } 
    try {
      const response = await fetch('/api/shopAPI/addShop', {
        method: 'POST',
        body: JSON.stringify({
          name,
          bio,
          address,
          images,
          laundryServices,
          availableBrands,
          ownerId: session.user.id,
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
    <form className="flex flex-col m-4"
    onSubmit={handleFormSubmit}>
      <input
        className='m-2 rounded'
        type="text"
        placeholder="Shop Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className='m-2 rounded'
        type="textarea"
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <input
        className='m-2 rounded'
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

  {/* ------------------------------------------------------------------------------photo upload section--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      
      <div id="images">
        <div>
          <div id="profilepic">
            <label
            className='w-24 h-24 text-center flex items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-gray-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
            </svg>
              <div>
                Upload
              </div>
              <input
                className='m-2 rounded hidden'
                type="file"
                value={images}
                onChange={(e) => setImages(e.target.value)}
              />
            </label>
          </div>
        </div>
    </div>

{/* --------------------------------------------------------------------------checkbox section below --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
<div id='checkboxes'>
  <h1 className='text-2xl  mt-2'>Wash Types</h1>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Wash and Fold"
          onChange={(e) => {
            if (e.target.checked) {
              setLaundryServices([...laundryServices, e.target.value]);
            } else {
              setLaundryServices(laundryServices.filter((service) => service !== e.target.value));
            }
          }}
        />
        Normal
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Dry Cleaning"
          onChange={(e) => {
            if (e.target.checked) {
              setLaundryServices([...laundryServices, e.target.value]);
            } else {
              setLaundryServices(laundryServices.filter((service) => service !== e.target.value));
            }
          }}
        />
        Heavy Duty
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Dry Cleaning"
          onChange={(e) => {
            if (e.target.checked) {
              setLaundryServices([...laundryServices, e.target.value]);
            } else {
              setLaundryServices(laundryServices.filter((service) => service !== e.target.value));
            }
          }}
        />
        Delicates
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Dry Cleaning"
          onChange={(e) => {
            if (e.target.checked) {
              setLaundryServices([...laundryServices, e.target.value]);
            } else {
              setLaundryServices(laundryServices.filter((service) => service !== e.target.value));
            }
          }}
        />
        Bulky
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Dry Cleaning"
          onChange={(e) => {
            if (e.target.checked) {
              setLaundryServices([...laundryServices, e.target.value]);
            } else {
              setLaundryServices(laundryServices.filter((service) => service !== e.target.value));
            }
          }}
        />
        Whites
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Dry Cleaning"
          onChange={(e) => {
            if (e.target.checked) {
              setLaundryServices([...laundryServices, e.target.value]);
            } else {
              setLaundryServices(laundryServices.filter((service) => service !== e.target.value));
            }
          }}
        />
        Permanent Press
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Dry Cleaning"
          onChange={(e) => {
            if (e.target.checked) {
              setLaundryServices([...laundryServices, e.target.value]);
            } else {
              setLaundryServices(laundryServices.filter((service) => service !== e.target.value));
            }
          }}
        />
        Express
      </label>
    </div>
      {/* ----------------------------------------------------------------------------brands section below------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      
      {/* Checkbox inputs for available brands */}
      <div 
      className='mt-4'
      id='brands'>
        <h1 className='text-2xl'> Available Brands</h1>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Tide"
          onChange={(e) => {
            if (e.target.checked) {
              setAvailableBrands([...availableBrands, e.target.value]);
            } else {
              setAvailableBrands(availableBrands.filter((brand) => brand !== e.target.value));
            }
          }}
        />
        Tide
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Ajax"
          onChange={(e) => {
            if (e.target.checked) {
              setAvailableBrands([...availableBrands, e.target.value]);
            } else {
              setAvailableBrands(availableBrands.filter((brand) => brand !== e.target.value));
            }
          }}
        />
        Ajax
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Woolite"
          onChange={(e) => {
            if (e.target.checked) {
              setAvailableBrands([...availableBrands, e.target.value]);
            } else {
              setAvailableBrands(availableBrands.filter((brand) => brand !== e.target.value));
            }
          }}
        />
        Woolite
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Kirkland"
          onChange={(e) => {
            if (e.target.checked) {
              setAvailableBrands([...availableBrands, e.target.value]);
            } else {
              setAvailableBrands(availableBrands.filter((brand) => brand !== e.target.value));
            }
          }}
        />
        Kirkland
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Persil"
          onChange={(e) => {
            if (e.target.checked) {
              setAvailableBrands([...availableBrands, e.target.value]);
            } else {
              setAvailableBrands(availableBrands.filter((brand) => brand !== e.target.value));
            }
          }}
        />
        Persil
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Arm&Hammer"
          onChange={(e) => {
            if (e.target.checked) {
              setAvailableBrands([...availableBrands, e.target.value]);
            } else {
              setAvailableBrands(availableBrands.filter((brand) => brand !== e.target.value));
            }
          }}
        />
        Arm & Hammer
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="All"
          onChange={(e) => {
            if (e.target.checked) {
              setAvailableBrands([...availableBrands, e.target.value]);
            } else {
              setAvailableBrands(availableBrands.filter((brand) => brand !== e.target.value));
            }
          }}
        />
        All
      </label>
      </div>
      <button 
      className="bg-white rounded"
      type="submit">
        Create Shop</button>
    </form>
  );
}
