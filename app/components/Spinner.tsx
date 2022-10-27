import styles from "./Components.module.css";

export default function Spinner(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  );
}
