import { User } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectUserById } from "../../module/selectors";
import { useEffect } from "react";
import { loadUsers } from "../../../user/module/thunk/load-users";

export const UserContainer = ({ userId, ...props }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => selectUserById(state, { userId }));

  useEffect(() => {
    dispatch(loadUsers(userId));
  }, [userId]);

  if (!user) {
    return <span>Loading...</span>;
  }

  return <User {...props} userName={user.name} />;
};
