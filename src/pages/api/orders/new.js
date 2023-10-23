import clientPromise from "../../../../lib/mongodb";

async function addShop (req, res) {
    try {
      const client = await clientPromise;
      const db = client.db("WashwiseMain");
      const { 
        typeOfWash,
        orderDate,
        additionalNotes, } = req.body;
  
      const post = await db.collection("orders").insertOne({
        typeOfWash,
        orderDate,
        additionalNotes,
      });
  
      res.json(post);
    } catch (e) {
      console.error(e);
      throw new Error(e).message;
    }
  };

  export default addShop;