import styles from "Components.module.css";
import Link from "next/link";
import { Record } from "pocketbase";

export default function Note({ note }: { note: Record }): JSX.Element {
  const { id, title, content, created } = note;

  return (
    <Link href={`/notes/${id}`}>
      <div key={id} className={styles.note}>
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.content}>{content}</h5>
        <p className={styles.created}>{created}</p>
      </div>
    </Link>
  );
}
