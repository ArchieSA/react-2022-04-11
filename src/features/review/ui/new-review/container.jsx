import { NewReview } from "./component";

export const NewReviewContainer = ({ restaurantId, ...props }) => {
  const onSubmit = () => {};
  return <NewReview {...props} onSubmit={onSubmit} />;
};
