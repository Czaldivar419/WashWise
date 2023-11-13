import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDataFetching } from "@/components/utils/dataFetching";
import Link from "next/link";
import Navbar from "@/components/nav";

export default function SingleOrder() {
  const router = useRouter();
  const { id } = router.query;

  const order = useDataFetching(`/api/orders/getOrder/${id}`);

  return (
    <div className="bg-blue-300 min-h-screen min-w-screen">
    <div className="p-4">
      <h1 className="text-4xl pb-2 text-center text-white">Order Details</h1>
      <ShopDetails shopId={order.shopId} />
      <p>Order Status: {order.orderStatus}</p>
      <p>Wash Type: {order.typeOfWash}</p>
      <p>Detergent: {order.typeOfDetergents}</p>
      <p>Order Number: {order._id}</p>
      <Link 
      href="/dashboard"
      className="bg-white px-2 rounded">Back to Orders</Link>
    </div>
    <Navbar />
    </div>
  );
}

function ShopDetails({ shopId }) {
  const [ shopData, setShopData ] = useState({});
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
      <p className="text-3xl">{shopData.name}</p>
    </div>
  );
}
