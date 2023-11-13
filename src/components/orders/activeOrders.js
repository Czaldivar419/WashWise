import { useState, useEffect } from 'react';
import { useURL } from '../utils/urlFinder';
import Link from 'next/link';

export default function ActiveOrders() {
  const { query } = useURL(); // Retrieves shopID

  const [activeOrders, setActiveOrders] = useState([]);

  useEffect(() => {
    const fetchActiveOrders = async () => {
      try {
        const response = await fetch('/api/orders/getOrders');
        if (response.ok) {
          const orders = await response.json();
          const filteredOrders = orders.filter((order) => order.orderStatus == 'Active');
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
  }, []);

  const formatTime = (time) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric',};
    return new Date(time).toLocaleString(undefined, options);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl pb-2">Active Orders</h1>
      <ul className="text-center text-white">
        {activeOrders.map((activeOrder) => (
          <Link href="/orders/[id]" as={`/orders/${activeOrder._id}`} key={activeOrder._id}>
            <li className="border-2">
              <ShopDetailDisplay shopId={activeOrder.shopId} />
              <p className="text-2xl">{formatTime(activeOrder.timeOfOrder)}</p>
            </li>
          </Link>
        ))}
      </ul>
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
      <p className="text-3xl">
        {shopData.name || 'Loading...'}
      </p>
    </div>
  );
}
