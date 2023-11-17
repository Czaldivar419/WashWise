import clientPromise from "/lib/mongodb";
import { useRouter } from 'next/router';
import Header from "@/components/utils/header";
import Bubbles from "@/components/utils/bubbles";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Navbar from "@/components/utils/nav";

export default function Shops({ shops }) {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  const handleOrderRequest = () => {
    setShowOrderForm(true);
  };

  if (!session) {
    // Session is not available yet, you can render a loading state or return null
    return <div>Loading...</div>;
  }

  const newShopRedirect = async () => {
    await router.push("/shops/new");
  };

  return (
    <div className="p-4">
      <Bubbles />
      <Header goBackPath={'/'} profilePath={`/profile/${session.user.id}`}/>
      <h1 className="text-center  font-bold text-4xl mb-4">Shops Near You</h1>
      <button 
        className="text-black rounded bg-gray-100 px-2 mb-4"
        onClick={newShopRedirect}
      >
        + Create a Shop
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {shops.map((shop) => (
          <Link key={shop._id} href="/shops/[id]" as={`/shops/${shop._id}`}>
            <div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-2xl font-bold mb-2 block">{shop.name}</p>
                <p className="text-gray-600 mb-2">{shop.bio}</p>
                <p className="text-gray-600 mb-2">{shop.address}</p>
                <div className="mb-2 relative">
                  <h3 className="text-lg font-semibold">Washes:</h3>
                  <img 
                    src={shop.images} 
                    alt={shop.name} 
                    className="w-40 h-40 rounded-full absolute right-8 top-4 shadow-lg" 
                  />
                </div>
                <ul>
                  {shop.laundryServices.map((service, index) => (
                    <li key={index} className="text-gray-600"> {service}</li>
                  ))}
                </ul>
                <div>
                  <h3 className="text-lg font-semibold">Detergents:</h3>
                  <ul>
                    {shop.availableBrands.map((brand, index) => (
                      <li key={index} className="text-gray-600"> {brand}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
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
