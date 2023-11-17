import clientPromise from "../../../../lib/mongodb";

async function createOrder(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("WashwiseMain");
    const { 
      orderStatus,
      timeOfOrder,
      typeOfWash,
      typeOfDetergents,
      customerId,
      shopId
       } = req.body; 

    const order = await db.collection("orders").insertOne({
      orderStatus,
      timeOfOrder,
      typeOfWash,
      typeOfDetergents,
      customerId,
      shopId 
    });

    res.json(order);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Error creating order" });
  }
}

export default createOrder;