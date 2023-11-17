import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useURL } from '../utils/urlFinder';
import Link from 'next/link';

export default function PastOrders() {
  const { query } = useURL(); // Retrieves shopID
  const { data: session } = useSession();
  const customerId = session.user.id

  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    const fetchCompletedOrders = async () => {
      try {
        const response = await fetch(`/api/orders/getOrders?customerId=${customerId}`);
        if (response.ok) {
          const orders = await response.json();
          const filteredOrders = orders.filter((order) => order.orderStatus == 'Complete');
          filteredOrders.sort((a, b) => new Date(b.timeOfOrder) - new Date(a.timeOfOrder));
          setCompletedOrders(filteredOrders);
        } else {
          console.error('Error fetching active orders');
        }
      } catch (error) {
        console.error('Error fetching active orders:', error);
      }
    };

    fetchCompletedOrders();
  }, []);

  const formatTime = (time) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric',};
    return new Date(time).toLocaleString(undefined, options);
  };

  return (
    <div className="p-4 mb-12">
      <h1 className="text-3xl pb-2 text-white rounded-lg cursor-pointer">Past Orders</h1>
      {completedOrders.length === 0 ? (
        <p className='text-black border bg-gray-100 p-3 rounded-lg'>You have no past orders</p>
      ) : (
      <ul className="text-center">
        {completedOrders.map((completedOrder) => (
          <Link href="/orders/[id]" as={`/orders/${completedOrder._id}`} key={completedOrder._id}>
            <li className="border-2 m-2 text-white bg-gray-100 rounded-lg cursor-pointer">
              <ShopDetailDisplay shopId={completedOrder.shopId} />
              <p className="text-lg text-black mt-2">{formatTime(completedOrder.timeOfOrder)}</p>
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
      <p className="text-2xl text-black">
        {shopData.name || 'Loading...'}
      </p>
    </div>
  );
}
