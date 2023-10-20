import clientPromise from "/lib/mongodb";
import Link from "next/link";

export default function Shops({ shops }) {
  return (
    <div>
      <h1>Shops Near You</h1>
      <ul>
        {shops.map((shop) => (
          <li key={shop._id}>
            <Link href="/shops/[id]" as={`/shops/${shop._id}`}>
                <h2>{shop.name}</h2>
            </Link>
            <h3>{shop.zipcode}</h3>
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

        const shops = await db
            .collection("shops")
            .find({})
            .limit(10)
            .toArray();

        return {
            props: { shops: JSON.parse(JSON.stringify(shops)) },
        };
    } catch (e) {
        console.error(e);
    }
}
        