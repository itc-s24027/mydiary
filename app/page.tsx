import Image from "next/image";
import styles from "./page.module.css";
import DiaryList from "./_components/DiaryList";
import { getDiaryesList } from "./_libs/microcms";
import { TOP_DIARY_LIMIT } from "./_constants";
import ButtonLink from "./_components/ButtonLink";

export default async function Home() {
  const data = await getDiaryesList({ limit: TOP_DIARY_LIMIT });
  return (
    <>
      {/*コンテンツ*/}
      <main>
        <div>
          <h1 className={styles.h1title}>~ New Diary ~</h1>
          <DiaryList diarys={data.contents} />
          <ButtonLink href="/diary">VIEW MORE</ButtonLink>
        </div>
      </main>
    </>
  );
}
