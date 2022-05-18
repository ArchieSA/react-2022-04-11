import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export function useCheckPermission() {
  // const location = useLocation();
  // console.log(location);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // // const isNotAllowed = false;
  // const isNotAllowed = useSelector((state) =>
  //   selectIsPageNotAllowed(state, location.pathname)
  // );
  //
  // useLayoutEffect(() => {
  //   dispatch(checkPermission(location.pathname));
  // }, []);
  //
  // useEffect(() => {
  //   if (isNotAllowed) {
  //     navigate(ROUTES.NotAllowed);
  //   }
  // }, [isNotAllowed]);
}
