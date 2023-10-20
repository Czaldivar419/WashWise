import clientPromise from "../../../../lib/mongodb";

async function addShop (req, res) {
    try {
      const client = await clientPromise;
      const db = client.db("WashwiseMain");
      const { name, zipcode } = req.body;
  
      const post = await db.collection("shops").insertOne({
        name,
        zipcode,
      });
  
      res.json(post);
    } catch (e) {
      console.error(e);
      throw new Error(e).message;
    }
  };

  export default addShop;