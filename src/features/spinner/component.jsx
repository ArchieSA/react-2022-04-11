import styles from './loaders.module.scss';

export const SpinnerLoader = ({ isLoading, text }) => {
  if (!isLoading) return null;

  return  (
    <div className={styles.root}>
      <div className={styles.spinnerLoader} />
      <div className={styles.text}>{`Загрузка ${text}...`}</div>
    </div>
  )
};
