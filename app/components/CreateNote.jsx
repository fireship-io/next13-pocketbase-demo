import styles from "CreateNote.module.css";
import PocketBase from "pocketbase";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function createNote() {
    const db = new PocketBase("http://127.0.0.1:8090");

    await db.records.create("notes", {
      title,
      content,
    });
  }

  const handleCreate = () => {
    createNote()
      .then(() => alert("Note created!"))
      .finally(() => {
        setTitle("");
        setContent("");
      });
  };

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
