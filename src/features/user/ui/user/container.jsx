import { User } from "./component";
import { useSelector } from "react-redux";
import { selectIsUserLoading, selectUserById } from "../../module/selectors";
import { SpinnerLoader } from '../../../spinner/component';


export const UserContainer = ({ userId, ...props }) => {
  const
    user = useSelector((state) => selectUserById(state, { userId })),
    isLoading = useSelector(selectIsUserLoading);

  return isLoading
    ? <SpinnerLoader isLoading={isLoading} />
    : <User {...props} userName={user?.name} />;
};
