import clientPromise from "/lib/mongodb";

async function getOrders (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("WashwiseMain");

    const { customerId } = req.query;
    console.log("custId", customerId)

    if (!customerId) {
      return res.status(400).json({ error: "Missing customerId parameter" });
    }

    const orders = await db.collection("orders").find({ customerId }).toArray();

    res.json(orders);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default getOrders;