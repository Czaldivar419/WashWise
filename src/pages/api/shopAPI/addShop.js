import clientPromise from "../../../../lib/mongodb";

async function addShop (req, res) {
    try {
      const client = await clientPromise;
      const db = client.db("WashwiseMain");
      const { 
        name,
        bio,
        address,
        images,
        laundryServices,
        availableBrands,
        ownerId, } = req.body;
  
      const post = await db.collection("shops").insertOne({
          name,
          bio,
          address,
          images,
          laundryServices,
          availableBrands,
          ownerId,
      });
  
      res.json(post);
    } catch (e) {
      console.error(e);
      throw new Error(e).message;
    }
  };

  export default addShop;