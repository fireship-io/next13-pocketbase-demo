"use client";
import PocketBase, { Record } from "pocketbase";
import { use } from "react";
import Note from "./components/Note";
import styles from "./Home.module.css";

export async function getNotes(): Promise<Record[]> {
  const db: PocketBase = new PocketBase("http://127.0.0.1:8090");

  const result = await db.records.getList("notes", 1, 50, {
    filter: 'created >= "2022-01-01 00:00:00"',
  });

  return result.items;
}

export default function HomePage(): JSX.Element {
  const notes: Record[] = use(getNotes());

  return (
    <>
      <h1 className={styles.pageTitle}>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </>
  );
}
