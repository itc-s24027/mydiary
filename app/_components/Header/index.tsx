import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image
          src="/images/myDiarylogo.gif"
          alt="Diary Logo"
          className={styles.logo}
          width={125}
          height={95}
          priority
          unoptimized
        />
      </a>
      <nav className={styles.headernav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/diary">Diarys</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
