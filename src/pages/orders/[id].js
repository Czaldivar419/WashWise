import { useRouter } from 'next/router';
import { ObjectId } from 'mongodb';
import clientPromise from '/lib/mongodb';

export default function SingleOrder({ order }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{order.name}</h1>
      <h3>{order.zipcode}</h3>
      <h3>{order.zipcode}</h3>
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