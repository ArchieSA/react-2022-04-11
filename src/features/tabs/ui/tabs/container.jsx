import { Tab } from "../tab/component";
import styles from "./styles.module.scss";
import { selectAllRestaurants } from "../../../restaurant/module/selectors";
import { useSelector } from "react-redux";

export const TabsContainer = ({ tabIds, selectedId, onTabSelect }) => {
  let tabs = useSelector(selectAllRestaurants);
  return (
    <div className={styles.root}>
      {tabs.map(({ name, id }) => (
        <Tab
          key={id}
          label={name}
          onTabSelect={() => onTabSelect(id)}
          isSelected={id === selectedId}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
