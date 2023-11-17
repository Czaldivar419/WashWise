import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import Bubbles from "@/components/utils/bubbles";

export default function NewReview() {
  const router = useRouter();
  const { shopData } = router.query;
  const [parsedShopData, setParsedShopData] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    console.log("shopData", shopData);
  
    if (shopData !== null && shopData !== undefined) {
      try {
        const parsedData = JSON.parse(shopData);
        console.log("parsedData", parsedData);
        setParsedShopData(parsedData);
      } catch (error) {
        console.error("Error parsing shopData:", error);
      }
    }
  }, [shopData]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Assuming you have a function to submit the review data
    // Adjust this part based on your backend logic
    const session = await getSession();

    if (!session) {
        console.error('User not authenticated');
        return;
      }
  
    const timestamp = new Date().toISOString(); 

    const reviewData = {
      customerId: session.user.id,
      shopId: parsedShopData._id,
      rating,
      reviewText,
      timeOfReview: timestamp
    };


    try {
        const response = await fetch('/api/reviews/new', {
          method: 'POST',
          body: JSON.stringify({
            ...reviewData,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
            // Order created successfully, handle success here.
            console.log('Review created successfully');
            // You can optionally pass the created order data to a callback
            router.push("/confirmation/review");
          } else {
            // Handle errors if necessary.
            console.error('Review creation failed');
          }
        } catch (error) {
          // Handle network or other errors.
          console.error('An error occurred:', error);
        }
      };

  return (
    <div>
      <Bubbles />
      <h1 className="text-4xl text-white text-center">New Review</h1>
      {parsedShopData && (
        <>
          <p className="text-white text-2xl p-4 m-2">Shop: {parsedShopData.name}</p>
          <form onSubmit={handleSubmit}>
            <div className="m-2 p-4">
              <label className="text-white text-xl">Rating: </label>
              <select value={rating} onChange={(e) => handleRatingChange(e.target.value)}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-4 flex flex-col">
              <label className="text-xl text-white m-2">Review:</label>
              <textarea
                className="m-2 mt-0"
                value={reviewText}
                onChange={handleReviewTextChange}
                rows="4"
                cols="40"
                placeholder="Write your review here..."
              />
            </div>
            <div>
              <button 
              type="submit"
              className="m-6 p-2 bg-gray-100 rounded-lg">
                Submit Review</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
