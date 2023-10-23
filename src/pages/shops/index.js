import clientPromise from "/lib/mongodb";
import { useRouter } from 'next/router';
import Link from "next/link";
import Navbar from "@/components/nav";



export default function Shops({ shops }) {
  let router = useRouter();

  const newShopRedirect = async () => {
    await router.push("/shops/new");
  }

  return (
    <div className="bg-blue-300 min-h-screen min-w-screen">
      <h1 className="text-center text-4xl mb-4">Shops Near You</h1>
      <button 
      className="text-white rounded bg-gray-500 px-2 mb-2 ml-2"
      onClick={newShopRedirect}>+Create a Shop</button>
      <ul className="text-center text-white">
        {shops.map((shop) => (
          <li 
          className="border-2"
          key={shop._id}>
            <Link href="/shops/[id]" as={`/shops/${shop._id}`}>
                <h2 className="text-2xl">{shop.name}</h2>
            </Link>
            <h3>{shop.bio}</h3>
            <h3>{shop.address}</h3>
            <h3>{shop.images}</h3>
            <h3 className="text-center text-xl">Services:</h3>
            <ul>
              {shop.laundryServices.map(( service, index ) => (
                <li key={index}> {service}</li>
              ))}
            </ul>
            <h3 className="text-center text-xl">Brands:</h3>
            <ul>
              {shop.availableBrands.map(( service, index ) => (
                <li key={index}> {service}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Navbar />
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
        