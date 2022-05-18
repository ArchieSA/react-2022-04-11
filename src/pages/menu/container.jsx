import { useSelector } from "react-redux";
import { MenuContainer } from "../../features/menu/ui/menu/container";

export const MenuPageContainer = () => {
  const propductIds = useSelector((state) => state.product.ids);

  return <MenuContainer productIds={propductIds} />;
};
