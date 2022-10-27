"use client";
import Link from "next/link";
import styles from "Notes.module.css";
import PocketBase from "pocketbase";
import { use } from "react";
import Note from "../../components/Note";
import RootLayout from "./layout";

export async function getNote(noteId: string) {
  const db = new PocketBase("http://127.0.0.1:8090");

  const note = await db.records.getOne("notes", noteId, {
    expand: "some_relation",
  });

  return note;
}

export default function NotePage({ params }: any) {
  const id = params.id;

  const note = use(getNote(id));

  return (
    <RootLayout
      pageTitle={note.title}
      action={
        <Link href="/" className={styles.action}>
          👈 Go back
        </Link>
      }
    >
      <Note note={note} />
    </RootLayout>
  );
}
