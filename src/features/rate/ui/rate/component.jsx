import styles from "./styles.module.scss";

export const Rate = ({ value }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(
        <div key={i} className={styles.icon + " " + styles.colored} />
      );
      continue;
    }
    stars.push(<div key={i} className={styles.icon} />);
  }

  return <div className={styles.containerStars}>{stars}</div>;
};
