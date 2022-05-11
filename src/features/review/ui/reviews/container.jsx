import { Reviews } from "./component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsReviewsLoading,
} from "../../module/selectors";
import { useEffect } from "react";
import { loadReviews } from "../../module/thunks/load-reviews";
import { UiLoader } from "../../../../ui/UiLoader/component"
import { loadUsers } from "../../../user/module/thunks/load-users";
import { selectUserLoading } from "../../../user/module/selectors";

export const ReviewsContainer = ({ reviewIds, restaurantId }) => {
  const dispatch = useDispatch();
  const isLoadingReviews = useSelector(selectIsReviewsLoading);
  const isLoadingUsers = useSelector(selectUserLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(loadUsers());
  }, [])

  return isLoadingReviews || isLoadingUsers ? (
    <UiLoader />
  ) : (
    <Reviews reviewIds={reviewIds} />
  );
};
