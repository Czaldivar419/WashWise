import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

async function editShop (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("WashwiseMain");
    const { id } = req.query;
    const { name, zipcode } = req.body;

    const post = await db.collection("shops").updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          name: name,
          zipcode: zipcode,
        },
      }
    );

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default editShop;