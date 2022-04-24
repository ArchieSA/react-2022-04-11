import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

export const Tabs = ({ tabs, selectedId, onTabSelect }) => (
  <div className={styles.root}>
    {tabs.map(({ label, id }) => (
      <Tab
        key={id}
        label={label}
        onTabSelect={() => onTabSelect(id)}
        isSelected={id === selectedId}
        className={styles.tab}
      />
    ))}
  </div>
);
