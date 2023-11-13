import { useDataFetching } from "../utils/dataFetching";
import Link from "next/link";

export default function PastOrders() {
    const allOrders = useDataFetching('/api/orders/getOrders');
    const pastOrders = allOrders ? allOrders.filter(order => order.orderStatus === 'complete') : null;
  

  if (!pastOrders) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
        <h1 className="text-3xl">Past Orders</h1>
      <ul className="text-center text-white">
        {pastOrders.map((pastOrder) => ( 
          <li className="border-2" key={pastOrder._id}>
            <Link href="/orders/[id]" as={`/orders/${pastOrder._id}`}>
              <h2 className="text-2xl">{pastOrder.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
