import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>FITTRACK COACH</p>
        <h1>Backend API</h1>
        <p>The service is running. Use <code>/api/health</code> for health checks.</p>
      </main>
    </div>
  );
}
