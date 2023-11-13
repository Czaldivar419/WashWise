import { useSession } from 'next-auth/react';
import ShopProfile from '@/components/shop/shopProfile';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import Navbar from '@/components/nav';

export default function SingleShop({ shop }) {
  const { data: session } = useSession();

  const handleOrderRequest = () => {
    setShowOrderForm(true);
  };

  return (
    <div className='bg-blue-300 min-h-screen min-w-screen'>
      <ShopProfile shop={shop} />
      <Navbar />
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
  try {
    const client = await clientPromise;
    const db = client.db('WashwiseMain');
    const shop = await db.collection('shops').findOne({ _id: new ObjectId(params.id) });

    return {
      props: { shop: shop ? JSON.parse(JSON.stringify(shop)) : null },
    };
  } catch (error) {
    console.error('Error fetching shop data:', error);
    return {
      props: { shop: null },
    };
  }
}

