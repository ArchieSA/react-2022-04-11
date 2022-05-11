import styles from "./styles.module.scss";

export const UiLoader = () => 
    <div className={styles.root}>
        <svg className={styles.loader}>
            <circle
                className={styles.path}
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="2"
            />
        </svg>
    </div>