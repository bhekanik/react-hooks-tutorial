import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hooks Tutorial</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the React Hooks Tutorial</h1>

        <p className={styles.description}>A short tutorial on React Hooks</p>

        <div className={styles.grid}>
          <Link href="/hooks">
            <div className={styles.card}>
              <h3>React Hooks</h3>
              <p>
                A walkthrough of the most common hooks. For each hook, this
                starts from what the scenario would be when using classes then
                shows what that same scenario would be when using hooks
              </p>
            </div>
          </Link>
          <Link href="/optimize">
            <div className={styles.card}>
              <h3>Optimizing with hooks</h3>
              <p>
                A short illustration of render optimization using hooks. In
                particular React.memo, useCallback and useMemo.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
