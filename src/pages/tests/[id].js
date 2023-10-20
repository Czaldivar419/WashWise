import { useRouter } from 'next/router';
import { ObjectId } from 'mongodb';
import clientPromise from '/lib/mongodb';

export default function MovieDetail({ movie }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <h3>{movie.metacritic}</h3>
      <p>{movie.plot}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db('sample_mflix');
  const movies = await db.collection('movies').find({}, { projection: { _id: 1 } }).toArray();

  const paths = movies.map((movie) => ({
    params: { id: movie._id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const client = await clientPromise;
  const db = client.db('sample_mflix');
  const movie = await db.collection('movies').findOne({ _id: new ObjectId(params.id) });

  return {
    props: { movie: JSON.parse(JSON.stringify(movie)) },
  };
}