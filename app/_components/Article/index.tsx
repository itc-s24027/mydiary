// 詳細ページコンポーネント
// [id]/page.tsx から渡されたデータを表示
import styles from "./index.module.css"; 
import Category from "@/app/_components/CategoryButton";
import DiaryImage from "@/app/_components/DiaryImage";
import { formatDate } from "@/app/_libs/utils";
import { Diary } from "@/app/_libs/microcms";

// 渡されたデータがDiary型であることを示す
type Props = {
  data: Diary;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>

      <div className={styles.datecontent}>
        {/* 画像がある場合 */}
        {data.image && data.image.length > 0 ? (
          <div className={styles.imageContainer}>
            {data.image.map((img, i) => (
              <DiaryImage
                key={i}
                images={[img]}
                width={600}
                height={600}
                className={styles.detailImage}
              />
            ))}
          </div>
        ) : (
          <div className={styles.imageContainer}>
          { /* 画像がない場合 */ }
          <DiaryImage
            images={[{ url: "/images/next.js課題noimage画像.png" }]}
            width={600}
            height={600}
            className={styles.detailImage}
          />
        </div>
        )}


        <div className={styles.textContainer}>
          <Category category={data.category} />
          <p>{formatDate(data.date)}</p>
          <p>{data.content}</p>
        </div>
      </div>
    </main>
  );
}
