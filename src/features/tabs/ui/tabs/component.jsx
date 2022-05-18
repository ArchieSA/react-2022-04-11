import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

export const Tabs = ({ tabs }) => (
  <div className={styles.root}>
    {tabs.map(({ label, id, href }) => (
      <Tab key={id} href={href} label={label} className={styles.tab} />
    ))}
  </div>
);
