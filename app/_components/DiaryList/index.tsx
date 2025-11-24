// 日記一覧コンポーネント
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { Diary } from "@/app/_libs/microcms";

type Props = {
  diarys: Diary[];
  showOnlyTitleAndImage?: boolean;
};

export default function DiaryList({ diarys, showOnlyTitleAndImage = false }: Props) {
    if (diarys.length === 0) {
      return <p>日記の投稿がありません</p>;
    }
  return (
    <div className={styles.container}>
      <ul className={styles.board}>
        {diarys.map((diary) => (
          <li key={diary.id}>
            <Link href={`/diary/${diary.id}`}>
              {/* 最初の画像1枚だけ表示 */}
              {diary.image && diary.image.length > 0 ? (
                <Image
                  src={diary.image[0].url}
                  alt={diary.title || "Diary Image"}
                  width={300}
                  height={300}
                />
              ) : (
                <Image
                  src="/images/next.js課題noimage画像.png"
                  alt="No Image"
                  width={300}
                  height={300}
                />
              )}
              <div className={styles.texitContainer}>
                <h3>{diary.title}</h3>
                <p>{new Date(diary.date).toLocaleDateString()}</p>
                <p className={styles.category}>{diary.category.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
