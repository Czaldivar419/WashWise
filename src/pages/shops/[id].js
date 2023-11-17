import { useSession } from 'next-auth/react';
import ShopProfile from '@/components/shop/shopProfile';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import Bubbles from '@/components/utils/bubbles';
import Header from '@/components/utils/header';
import Navbar from '@/components/utils/nav';
import ShopReviews from '../../components/reviews/shopReviews';

export default function SingleShop({ shop }) {
  const { data: session } = useSession();
  console.log(session);

  const handleOrderRequest = () => {
    setShowOrderForm(true);
  };

  if (!session) {
    // Session is not available yet, you can render a loading state or return null
    return <div>Loading...</div>;
  }


  return (
    <div>
      <Bubbles />
      <Header goBackPath="/shops" profilePath={`/profile/${session.user.id}`}/>
      <ShopProfile shop={shop} />
      <ShopReviews />
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

