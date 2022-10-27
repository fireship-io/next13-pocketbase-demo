"use client";
import CreateNote from "../components/CreateNote";
import styles from "./Create.module.css";

export default function CreatePage() {
  return (
    <>
      <h1 className={styles.pageTitle}>Create</h1>
      <CreateNote />
    </>
  );
}
