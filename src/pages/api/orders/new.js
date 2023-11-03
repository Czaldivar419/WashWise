import clientPromise from "../../../../lib/mongodb";

async function createOrder(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("WashwiseMain");
    const { 
      userId,
      name
       } = req.body; // Add 'userId' to the request body

    const order = await db.collection("orders").insertOne({
      userId,
      name,  // Link the order to the customer's ID
    });

    res.json(order);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Error creating order" });
  }
}

export default createOrder;