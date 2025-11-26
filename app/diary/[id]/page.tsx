// 詳細ページ 
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
import { getDiaryDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    dk?: string;
  }
};

// getDiaryDetail からidに基づく日記の詳細データを取得して表示
export default async function Page({params, searchParams}: Props) {
  const data = await getDiaryDetail(params.id, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.board}>
          <Article data={data} />
        </div>
      </div>
      <ButtonLink href="/diary">一覧に戻る</ButtonLink>
    </>
  );
}
