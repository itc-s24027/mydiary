// ホームページ
// 最新の日記2件を表示
import Image from "next/image";
import styles from "./page.module.css";
import DiaryList from "@/app/_components/DiaryList";
import { getDiaryesList } from "@/app/_libs/microcms";
import { TOP_DIARY_LIMIT } from "@/app/_constants";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  const data = await getDiaryesList({ limit: TOP_DIARY_LIMIT });
  return (
    <>
      {/*コンテンツ*/}
      <main>
        <div>
          <div className={styles.title}>
            <h2 className={styles.fukidashi}> New Diary </h2>
          </div>
          <DiaryList diarys={data.contents} />
          <ButtonLink href="/diary">VIEW MORE</ButtonLink>
        </div>
      </main>
    </>
  );
}
