import { useEffect, useState } from 'react';
import { useURL } from '../utils/urlFinder';
import { useDataFetching } from '../utils/dataFetching';
import { useDataFetchParams } from '../utils/dataFetchParams';

export default function ShopReviews() {
  const { query } = useURL(); // Gets the ID of the shop from the URL
  const [shopReviews, setShopReviews] = useState([]);

  // Fetch shop reviews based on ShopId
  const reviews = useDataFetching('/api/reviews');
  console.log("shopReviews", reviews);

  useEffect(() => {
    // Set shop reviews when data is available
    if (Array.isArray(reviews)) {
      setShopReviews(reviews);
    }
  }, [reviews]);

  return (
    <div className='pb-14'>
      <h1 className='text-white text-center text-3xl'>Shop Reviews</h1>
      {shopReviews
        .filter((review) => review.shopId === query)
        .map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
    </div>
  );
}

function ReviewItem({ review }) {
  const [reviewer, setReviewer] = useState(null);

  // Fetch user data based on the customerId of the review
  const user = useDataFetchParams('/api/users/getUser', { customerId: review.customerId });

  useEffect(() => {
    // Set reviewer when user data is available
    setReviewer(user);
  }, [user]);

  return (
    <div className="bg-gray-100 text-white m-4 p-4 mb-4 rounded-lg">
      {reviewer && (
        <>
          <p className="text-xl text-black font-bold mb-2">{reviewer.name}</p>
          <p className="mb-2 text-black">{review.reviewText}</p>
          <p className="text-lg text-black font-bold">Rating: {review.rating}</p>
        </>
      )}
    </div>
  );
}
