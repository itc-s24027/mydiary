// ページネーションコンポーネント
import { DIARY_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
    totalCount: number;
    current?: number;
};

export default function Pagination({totalCount, current = 1}: Props) {
    const pages = Array.from(
        { length: Math.ceil(totalCount / DIARY_LIST_LIMIT) },
        (_, i) => i + 1
    )

    return (
        <nav>
            <ul className={styles.container}>
                {pages.map((p) => (
                    <li className={styles.list} key={p}>
                        {current !== p ? (
                            <Link href={`/diary/p/${p}`} className={styles.item}>{p}</Link>
                        ) : (
                            <span className={`${styles.current} ${styles.current}`}>{p}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}