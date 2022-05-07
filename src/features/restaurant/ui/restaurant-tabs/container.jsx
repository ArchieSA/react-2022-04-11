import { useSelector } from "react-redux";
import { selectRestaurantTabs } from "../../module/selectors";
import { Tabs } from "../../../tabs/ui/tabs/component";

export const RestaurantTabsContainer = (props) => {
  const tabs = useSelector(selectRestaurantTabs);

  return <Tabs tabs={tabs} {...props} />;
};
