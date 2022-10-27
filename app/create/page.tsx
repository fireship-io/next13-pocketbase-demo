"use client";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import CreateNote from "../components/CreateNote";
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
