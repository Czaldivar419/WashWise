import clientPromise from "/lib/mongodb";
import Link from "next/link";

export default function Orders({ orders }) {
  return (
    <div>
      <h1>Orders Near You</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <Link href="/orders/[id]" as={`/orders/${order._id}`}>
                <h2>{order.typeOfWash}</h2>
            </Link>
            <h3>{order.orderDate}</h3>
            <h3>{order.additionalNotes}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("WashwiseMain");

        const orders = await db
            .collection("orders")
            .find({})
            .limit(10)
            .toArray();

        return {
            props: { orders: JSON.parse(JSON.stringify(orders)) },
        };
    } catch (e) {
        console.error(e);
    }
}