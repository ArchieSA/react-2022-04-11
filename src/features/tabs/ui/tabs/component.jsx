import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

export const Tabs = ({ tabs, selectedId, onTabSelect }) => (
  <div className={styles.root}>
    {tabs.map(({ label, id, href }) => (
      <Tab
        key         = {id}
        href        = {href}
        label       = {label}
        onTabSelect = {(e) => onTabSelect(e, id)}
        isSelected  = {id === selectedId}
        className   = {styles.tab}
      />
    ))}
  </div>
);
