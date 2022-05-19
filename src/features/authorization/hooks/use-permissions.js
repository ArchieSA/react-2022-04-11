import { useEffect,useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../consts/routes";

const selectIsPageAllowed = (state, pathname) => false;
const checkPermission = () => { };


export const useCheckPermission = () => {
  const
    location = useLocation(),
    navigate = useNavigate(),
    dispatch = useDispatch(),
    isNotAllowed = useSelector((state) => selectIsPageAllowed(state, location.pathname))
    console.log('isNotAllowed: ', isNotAllowed);

  useLayoutEffect(() => {
    // dispatch(checkPermission(location.pathname))
  }, []);

  useEffect(() => {
    if (isNotAllowed) {
      navigate(`/${ROUTES.NotAllowed}`)
    }
  }, [isNotAllowed]);

};
