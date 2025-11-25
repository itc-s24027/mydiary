"use client";

import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import cx from 'classnames';
import styles from './index.module.css';
import SearchField from "@/app/_components/SearchField";

export default function Menu() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);
    return (
      <div>
        <nav className={cx(styles.nav, isOpen && styles.open)}>
          <ul className={styles.items}>
            <li>
              <SearchField />
            </li>
            <li className={styles.text}>
              <Link href="/" onClick={close}>
                Home
              </Link>
            </li>
            <li className={styles.text}>
              <Link href="/diary" onClick={close}>
                Diarys
              </Link>
            </li>
          </ul>
          <button className={cx(styles.button, styles.close)} onClick={close}>
            <Image
              src="/images/close.png"
              alt="Close Menu"
              width={50}
              height={50}
              priority
            />
          </button>
        </nav>
        <button className={styles.button} onClick={open}>
          <Image
            src="/images/menu.png"
            alt="Open Menu"
            width={52}
            height={42}
          />
        </button>
      </div>
    );
}