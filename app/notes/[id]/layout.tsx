import "../../../styles/globals.css";
import styles from "../../../styles/Home.module.css";

export default function RootLayout({
  children,
  pageTitle,
  action,
}: {
  children: React.ReactNode;
  pageTitle: string;
  action?: JSX.Element | null;
}) {
  return (
    <html>
      <body className={styles.container}>
        <main className={styles.main}>
          <nav>
            <h1 className={styles.title}>{pageTitle}</h1>
            <br />
            {action}
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
