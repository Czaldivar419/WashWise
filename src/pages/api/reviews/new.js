import clientPromise from "../../../../lib/mongodb";

async function newReview (req, res) {
    try {
      const client = await clientPromise;
      const db = client.db("WashwiseMain");
      const { 
        customerId,
        shopId,
        rating,
        reviewText,
        timeOfReview, } = req.body;
  
      const post = await db.collection("reviews").insertOne({
        customerId,
        shopId,
        rating,
        reviewText,
        timeOfReview,
      });
  
      res.json(post);
    } catch (e) {
      console.error(e);
      throw new Error(e).message;
    }
  };

  export default newReview;