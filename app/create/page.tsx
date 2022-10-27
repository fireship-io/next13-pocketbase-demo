"use client";
import Link from "next/link";
import CreateNote from "../components/CreateNote";
import styles from "./Create.module.css";
import RootLayout from "./layout";

export default function CreatePage() {
  return (
    <RootLayout
      pageTitle="Create"
      action={
        <Link href="/" className={styles.action}>
          👈 Go back
        </Link>
      }
    >
      <CreateNote />
    </RootLayout>
  );
}
