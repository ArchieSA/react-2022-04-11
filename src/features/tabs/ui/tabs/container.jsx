import { useSelector } from "react-redux";
import { Link } from "../../../../components/link";
import { selectAllRestaurants } from "../../../restaurant/module/selectors";
import styles from "./styles.module.scss";

export const TabsContainer = ({ tabIds, selectedId, onRestrauntSelect }) => {
  let tabs = useSelector(selectAllRestaurants);
  return (
    <div className={styles.root}>
      {tabs.map(({ name, id }) => (
        <Link
          label={name}
          className={styles.tab}
          key={id}
          isSelected={id === selectedId}
          href={`/restraunts/${id}`}
        ></Link>
      ))}
    </div>
  );
};
