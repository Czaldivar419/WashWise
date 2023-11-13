import clientPromise from "../../../../../lib/mongodb";
import { ObjectId } from "mongodb";

async function getOrderById(req, res) {
    try {
      const { id } = req.query;
  
      const client = await clientPromise;
      const db = client.db('WashwiseMain');
      
      const order = await db.collection('orders').findOne({ _id: new ObjectId(id) });
  
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.json(order);
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default getOrderById;
