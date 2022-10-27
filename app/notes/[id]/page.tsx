import PocketBase from "pocketbase";
import { use } from "react";
import styles from "./Notes.module.css";

export async function getNote(noteId: string) {
  const db = new PocketBase("http://127.0.0.1:8090");

  const note = await db.records.getOne("notes", noteId, {
    expand: "some_relation",
  });

  return note;
}

export default function NotePage({ params }: any) {
  const id: string = params.id;

  const note = use(getNote(id));

  // async function deleteNote() {
  //   const db = new PocketBase("http://127.0.0.1:8090");
  //   await db.records.delete("notes", id);
  // }

  return (
    <div key={id} className={styles.note}>
      <h3 className={styles.pageTitle}>{note.title}</h3>
      <h5 className={styles.content}>{note.content}</h5>
      <p className={styles.created}>{note.created}</p>
      {/* <button type="button" onClick={deleteNote}>
          Delete note
        </button> */}
    </div>
  );
}
