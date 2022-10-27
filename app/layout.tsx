import "./globals.css";
import styles from "./Home.module.css";

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
            <a href="/create" className={styles.action}>
              + Create new note
            </a>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
