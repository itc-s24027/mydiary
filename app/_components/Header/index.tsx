import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/images/myDiarylogo.gif"
          alt="Diary Logo"
          className={styles.logo}
          width={125}
          height={95}
          priority
          unoptimized
        />
      </Link>
      <Menu />
    </header>
  );
}
