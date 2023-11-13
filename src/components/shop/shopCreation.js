import { useState } from 'react';
import { getSession } from 'next-auth/react';

export default function ShopCreation() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [images, setImages] = useState([]);
  const [laundryServices, setLaundryServices] = useState('');
  const [availableBrands, setAvailableBrands] = useState(''); 
  const [isUploading,setIsUploading] = useState(false);

  

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

  async function uploadImages(ev) {
    const files = ev.target?.files;
  
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
  
      for (const file of files) {
        data.append('file', file);
      }
  
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: data,
        });
  
        if (response.ok) {
          const res = await response.json();
          console.log(res);
          setImages(oldImages => [...oldImages, res.links]); // Use S3 URL
          setIsUploading(false);
        } else {
          // Handle errors if necessary.
          console.error('Image upload failed');
          setIsUploading(false); // Set loading state to false on error
        }
      } catch (error) {
        // Handle network or other errors.
        console.error('An error occurred:', error);
        setIsUploading(false); // Set loading state to false on error
      }
    }
  }



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
        {images.map((imageUrl, index) => (
          <img 
          key={index} 
          src={imageUrl} 
          alt={`Image ${index}`} 
          className="m-2 rounded h-24" />
        ))}
        {isUploading && <p>Loading...</p>}
        <div>
          <div id="profilepic">
            <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <div>
                Add image
              </div>
              <input type="file" onChange={uploadImages} className="hidden" />
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
          value="Normal"
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
          value="Heavy Duty "
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
          value="Delicates"
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
          value="Bulky"
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
          value="Whites"
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
          value="Dry Clean"
          onChange={(e) => {
            if (e.target.checked) {
              setLaundryServices([...laundryServices, e.target.value]);
            } else {
              setLaundryServices(laundryServices.filter((service) => service !== e.target.value));
            }
          }}
        />
        Dry Clean
      </label>
      <label>
        <input
          className='m-2 rounded'
          type="checkbox"
          value="Express"
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
