import { useURL } from '../utils/urlFinder';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function OrderForm({ onCreateOrder }) {
  const [formData, setFormData] = useState({
    timeOfOrder: '',
    typeOfWash: '',
    typeOfDetergents: '',
  });

  //---------------------------Form submission data ^---------------------------------------------------------------------------------------------------------------------------//


  const {query} = useURL(); //retrieves shopID
  console.log(query);

  const [ shopData, setShopData ] = useState({});
  const [ laundryServices, setLaundryServices ] = useState([]);
  const [ availableBrands, setAvailableBrands ] = useState([]);

  const router = useRouter();

//----------------------------ShopData Retrieval ^---------------------------------------------------------------------------------------------------------------------------//

  const handleChange = (e) => {
  const { name, value } = e.target;

    if (name === "timeOfOrder") {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const session = await getSession();

    if (!session) {
      console.error('User not authenticated');
      return;
    }

    const timestamp = new Date().toISOString(); 

    try {
      const response = await fetch('/api/orders/new', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          customerId: session.user.id,
          shopId: query,
          timeOfOrder: timestamp,
          orderStatus: "Active",
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Order created successfully, handle success here.
        console.log('Order created successfully');
        // You can optionally pass the created order data to a callback
        router.push("/confirmation/order");
      } else {
        // Handle errors if necessary.
        console.error('Order creation failed');
      }
    } catch (error) {
      // Handle network or other errors.
      console.error('An error occurred:', error);
    }
  };
//-------------------------------------------Order Submission Post Request ^------------------------------------------------------------------------------------------------//
useEffect(() => {
    if (query) {
      // Fetch shop data based on the shop ID (query)
      // Update washOptions and detergentOptions accordingly
      const fetchShopData = async () => {
        try {
          const response = await fetch(`/api/shopAPI/getShop/${query}`);
          if (response.ok) {
            const shop = await response.json();
            setShopData(shop);
            setLaundryServices(shop.laundryServices || []);
            setAvailableBrands(shop.availableBrands || []);
          }
        } catch (error) {
          console.error('Error fetching shop data:', error);
        }
      };

      fetchShopData();
    }
  }, [query]);

  

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
      <label htmlFor="typeOfWash">Type of Wash:</label>
      <select
        id="typeOfWash"
        name="typeOfWash"
        value={formData.typeOfWash}
        onChange={handleChange}
      >
        <option value="">Select a wash type</option>
        {laundryServices.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
      <div className='mb-4'>
      <label htmlFor="typeOfDetergents">Type of Detergents:</label>
      <select
        id="typeOfDetergents"
        name="typeOfDetergents"
        value={formData.typeOfDetergents}
        onChange={handleChange}
      >
        <option value="">Select a detergent</option>
        {availableBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
      <button type="submit" className="mb-4 bg-blue-400 px-2 rounded">
        Create Order
      </button>
    </form>
  );
}
