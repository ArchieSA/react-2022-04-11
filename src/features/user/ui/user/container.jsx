import { User } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectUserById } from "../../module/selectors";
import { useEffect } from "react";
import { loadUsers } from "../../module/thunks/load-users";

export const UserContainer = ({ userId, ...props }) => {
  const dispatch = useDispatch();

  useEffect(()=>{dispatch(loadUsers())}, []);

  const user = useSelector((state) => selectUserById(state, { userId }));
  return <User {...props} userName={user?.name} />;
};
