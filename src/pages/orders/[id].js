import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDataFetching } from "@/components/utils/dataFetching";
import Link from "next/link";
import Bubbles from "@/components/utils/bubbles";
import Navbar from "@/components/utils/nav";

export default function SingleOrder() {
  const router = useRouter();
  const { id } = router.query;

  const order = useDataFetching(`/api/orders/getOrder/${id}`);
  const [ shopData, setShopData ] = useState({});

  useEffect(() => {
    if (order.shopId) {
      const fetchShopData = async () => {
        try {
          const response = await fetch(`/api/shopAPI/getShop/${order.shopId}`);
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
  }, [order.shopId]);

  const handleReviewClick = () => {
    router.push({
      pathname: "/reviews/new",
      query: { shopData: JSON.stringify(shopData) },
    });
  };

  return (
    <div>
      <Bubbles />
    <div className="p-4">
      <h1 className="text-4xl pb-2 text-center text-white">Order Details</h1>
      <div className="bg-gray-100 p-2 rounded-lg mb-4">
      <ShopDetails shopId={order.shopId} />
      <p>Order Status: {order.orderStatus}</p>
      <p>Wash Type: {order.typeOfWash}</p>
      <p>Detergent: {order.typeOfDetergents}</p>
      <p>Order Number: {order._id}</p>
      </div>
      {order.orderStatus === "Complete" && (
          <button 
          className="bg-green-500 text-white px-2 mr-4 rounded"
          onClick={handleReviewClick}
          >
            Leave a Review
          </button>
        )}
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
