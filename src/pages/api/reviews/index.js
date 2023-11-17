import clientPromise from "/lib/mongodb";

async function getReviews (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("WashwiseMain");

    const reviews = await db.collection("reviews").find({}).toArray();

    res.json(reviews);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default getReviews