import Image from "next/image";
import styles from "./page.module.css";
import { getDiaryesList } from "./_libs/microcms";
import { TOP_DIARY_LIMIT } from "./_constants";

export default async function Home() {
  const data = await getDiaryesList({ limit: TOP_DIARY_LIMIT });
  return (
    <>
      <section>
        <div>
          <Image
            src="/images/next.js課題背景画像.png"
            alt="背景画像"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>
      {/* ここからコンテンツ（画像の上に表示させる） */}
      <section>
        <h2>最新の日記</h2>
        {/* <getDiaryesList diary={data.contents} /> */}
      </section>
    </>
  );
}
