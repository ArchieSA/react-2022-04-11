import { User } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUserLoading, selectUserById } from "../../module/selectors";
import { useEffect } from "react";
import { loadUsers } from "../../module/thunks/load-users";

export const UserContainer = ({ userId, ...props }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => selectUserById(state, { userId }));
  const isLoading = useSelector((state) => selectIsUserLoading(state));

  useEffect(() => {
    dispatch(loadUsers())
  }, [])
  
  if (!user) {
    return null;
  }

  return isLoading ? (
    <span>loading</span>) : (
    <User {...props} userName={user.name} 
    />)
};
