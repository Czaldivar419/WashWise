import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

async function getCustomerById(req, res) {
  try {
    const { customerId } = req.query;
    console.log({customerId})

    const client = await clientPromise;
    const db = client.db("WashwiseMain");

    // Use ObjectId to convert the string ID to a valid ObjectId
    const shop = await db.collection("users").findOne({ _id: new ObjectId(customerId) });

    if (!shop) {
      res.status(404).json({ error: 'Shop not found' });
    } else {
      res.json(shop);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default getCustomerById;