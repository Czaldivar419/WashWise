import clientPromise from "../../../../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
      const { _id } = req.query;
      console.log("_id query", _id);
  
      try {
        const client = await clientPromise;
        const db = client.db("WashwiseMain");

        const reviews = await db.collection("reviews").find({ _id }).toArray();
  
        res.status(200).json(reviews);
      } catch (error) {
        handleError(error, res);
      }
    } else {
      res.status(405).end();
    }
  }