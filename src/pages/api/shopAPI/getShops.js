import clientPromise from "/lib/mongodb";

async function getShops (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("WashwiseMain");

    const posts = await db.collection("shops").find({}).limit(20).toArray();

    res.json(posts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default getShops