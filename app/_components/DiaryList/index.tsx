// 日記一覧コンポーネント
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import DiaryImage from "@/app/_components/DiaryImage";
import Category from "@/app/_components/CategoryButton";
import ButtonLink from "../ButtonLink";
import { Diary } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";

type Props = {
  diarys: Diary[];
  showOnlyTitleAndImage?: boolean;
};

export default function DiaryList({
  diarys,
  showOnlyTitleAndImage = false,
}: Props) {
  if (diarys.length === 0) {
    return (
      <>
    <p className={styles.noPosts}>日記の投稿がありません</p>
    </>
  );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.board}>
        {diarys.map((diary) => {
          // 日付は自前フォーマットで固定（環境差をなくす）
          const d = new Date(diary.date);
          const formattedDate = `${d.getFullYear()}-${String(
            d.getMonth() + 1
          ).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

          return (
            <li key={diary.id}>
              <article className={styles.card}>
                <Link href={`/diary/${diary.id}`} className={styles.mainLink}>
                  {diary.image && diary.image.length > 0 ? (
                    <DiaryImage images={diary.image} />
                  ) : (
                    <DiaryImage />
                  )}

                  <div className={styles.textContainer}>
                    <h3>{diary.title}</h3>
                    <p>{formatDate(diary.date)}</p>
                  </div>
                </Link>
                <div className={styles.categoryWrapper}>
                  <Category category={diary.category} />
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
