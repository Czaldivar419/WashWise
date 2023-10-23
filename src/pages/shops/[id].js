import { useRouter } from 'next/router';
import { ObjectId } from 'mongodb';
import { useSession, getSession } from 'next-auth/react';
import clientPromise from '/lib/mongodb';



export default function SingleShop({ shop }) {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
}

    const handleOrderRequest = async () => { 
      const session = await getSession();

    if (!session) {
      console.log('User is not authenticated. Session:', session);
      return;
    }

    try {
      const customerID = session.user.id;
      console.log('Customer ID:', customerID);

      // ... rest of your order creation logic ...

      router.push('/orders/confirmation');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{shop.name}</h1>
      <h3>{shop.zipcode}</h3>
      <button onClick={handleOrderRequest}>Request Order</button>
    </div>
  );
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db('WashwiseMain');
  const shops = await db.collection('shops').find({}, { projection: { _id: 1 } }).toArray();

  const paths = shops.map((shop) => ({
    params: { id: shop._id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const client = await clientPromise;
  const db = client.db('WashwiseMain');
  const shop = await db.collection('shops').findOne({ _id: new ObjectId(params.id) });

  return {
    props: { shop: JSON.parse(JSON.stringify(shop)) },
  };
}

