import { useState, useEffect } from 'react';
import { useURL } from '../utils/urlFinder';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function ActiveOrders() {
  const { query } = useURL(); // Retrieves shopID
  const { data: session } = useSession();
  const customerId = session.user.id;

  const [activeOrders, setActiveOrders] = useState([]);

  useEffect(() => {
    const fetchActiveOrders = async () => {
      try {
        const response = await fetch(`/api/orders/getOrders?customerId=${customerId}`);
        if (response.ok) {
          const orders = await response.json();
          const filteredOrders = orders.filter((order) => order.orderStatus === 'Active');
          filteredOrders.sort((a, b) => new Date(b.timeOfOrder) - new Date(a.timeOfOrder));
          setActiveOrders(filteredOrders);
        } else {
          console.error('Error fetching active orders');
        }
      } catch (error) {
        console.error('Error fetching active orders:', error);
      }
    };

    fetchActiveOrders();
  }, [customerId]);

  const formatTime = (time) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Date(time).toLocaleString(undefined, options);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl pb-2 text-white">Active Orders</h1>
      {activeOrders.length === 0 ? (
        <div>
        <p className='text-black border bg-gray-100 p-3 rounded-lg'>You have no past orders</p>
        <Link href="/shops">
          <button className="bg-blue-500 text-white px-3 py-2 mt-2 rounded-md">
            Find a Shop!
          </button>
        </Link>
      </div>
      ) : (
        <ul className="text-center ">
          {activeOrders.map((activeOrder) => (
            <Link href="/orders/[id]" as={`/orders/${activeOrder._id}`} key={activeOrder._id}>
              <li className="border-2 m-2 text-white bg-gray-100 rounded-lg cursor-pointer">
                <ShopDetailDisplay shopId={activeOrder.shopId} />
                <p className="text-lg text-black mt-2">{formatTime(activeOrder.timeOfOrder)}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

function ShopDetailDisplay({ shopId }) {
  const [shopData, setShopData] = useState({});

  useEffect(() => {
    if (shopId) {
      const fetchShopData = async () => {
        try {
          const response = await fetch(`/api/shopAPI/getShop/${shopId}`);
          if (response.ok) {
            const shop = await response.json();
            setShopData(shop);
          } else {
            console.error('Error fetching shop data');
          }
        } catch (error) {
          console.error('Error fetching shop data:', error);
        }
      };

      fetchShopData();
    }
  }, [shopId]);

  return (
    <div>
      <p className=" text-black text-2xl">{shopData.name || 'Loading...'}</p>
    </div>
  );
}
