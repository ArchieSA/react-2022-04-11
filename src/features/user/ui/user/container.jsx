import {User} from "./component";
import {useDispatch, useSelector} from "react-redux";
import {selectIsUserLoading, selectUserById} from "../../module/selectors";
import {loadUser} from "../../module/thunks/load-users";
import {useEffect} from "react";

export const UserContainer = ({ userId, ...props }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsUserLoading);
  const user = useSelector((state) => selectUserById(state, { userId }));

  useEffect(() => {
    dispatch(loadUser(userId));
  }, []);

  return isLoading || !user ? (
      <span>Loading</span>
  ) : (
      <User {...props} userName={user.name} />
  );

};
