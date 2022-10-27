import PocketBase from "pocketbase";
import { useState } from "react";
import styles from "./Components.module.css";

export default function CreateNote(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  async function createNote(): Promise<void> {
    const db: PocketBase = new PocketBase("http://127.0.0.1:8090");

    await db.records.create("notes", {
      title,
      content,
    });
  }

  function handleCreate(): void {
    createNote()
      .then(() => alert("Note created!"))
      .finally(() => {
        setTitle("");
        setContent("");
      });
  }

  return (
    <div className={styles.grid}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button type="button" onClick={handleCreate}>
        Create note
      </button>
    </div>
  );
}
