// ホームページ
// 最新の日記2件を表示
import Link from "next/link";
import styles from "./page.module.css";
import DiaryList from "@/app/_components/DiaryList";
import { getCategoryList } from "@/app/_libs/microcms";
import CategoryList from "@/app/_components/CategoryListBoard";
import { getDiaryesList } from "@/app/_libs/microcms";
import { TOP_DIARY_LIMIT } from "@/app/_constants";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  const data = await getDiaryesList({ limit: TOP_DIARY_LIMIT });
  const categories = await getCategoryList();
  return (
    <>
      {/*コンテンツ*/}
      <main>
          <div className={styles.title}>
            <h2 className={styles.fukidashi}> New Posts </h2>
          </div>
          <DiaryList diarys={data.contents} />
          <ButtonLink href="/diary">VIEW MORE</ButtonLink>
          <CategoryList categories={categories.contents} />
      </main>
    </>
  );
}
