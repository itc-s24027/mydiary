// 検索フィールドのコンポーネント

"use client";

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import styles from './index.module.css';

export default function SearchField() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // フォームのデフォルトの送信動作を防止
        const q = e.currentTarget.elements.namedItem("q"); // 入力フィールドを取得
        if (q instanceof HTMLInputElement) { // 型ガード
            const params = new URLSearchParams();
            params.set("q", q.value.trim());
            router.push(`/diary/search?${params.toString()}`); // 検索結果ページへ遷移
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.search}>
                <Image
                    src="/images/search.svg"
                    alt="検索"
                    width={16}
                    height={16}
                    loading="eager"
                />
                <input
                    type="text"
                    name="q"
                    placeholder="キーワードを入力"
                    className={styles.searchInput}
                />
            </label>
        </form>
    );
}