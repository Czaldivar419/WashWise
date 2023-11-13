import clientPromise from "/lib/mongodb";

async function getOrders (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("WashwiseMain");

    const orders = await db.collection("orders").find({}).toArray();

    res.json(orders);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default getOrders