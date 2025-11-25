// 詳細ページコンポーネント
// [id]/page.tsx から渡されたデータを表示
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import Carousel from "@/app/_components/Carousel";
import Category from "@/app/_components/CategoryButton";
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
        {data.image && data.image.length > 0 ? (
          <Carousel images={data.image} />
        ) : (
          <Image
            src="/images/next.js課題noimage画像.png"
            alt="No Image"
            width={600}
            height={600}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
        )}

        <Link href={`/diary/category/${data.category.id}`}>
          <Category category={data.category} />
        </Link>
        <p>{new Date(data.date).toLocaleDateString()}</p>
        <p>{data.content}</p>
      </div>
    </main>
  );
}
