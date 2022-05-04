import { User } from "./component";
import { useSelector } from "react-redux";
import { selectUserById } from "../../module/selectors";

export const UserContainer = ({ userId, ...props }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));
  return <User {...props} userName={user.name} />;
};
