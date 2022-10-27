import "../../globals.css";
import styles from "./Notes.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={styles.container}>
        <main className={styles.main}>
          <nav>
            <a href="/" className={styles.action}>
              👈 Go back
            </a>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
