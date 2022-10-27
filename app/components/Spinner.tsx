"use client";
import styles from "../../styles/Loading.module.css";

export default function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
}
