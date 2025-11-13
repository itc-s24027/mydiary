import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/diary">Diarys</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
