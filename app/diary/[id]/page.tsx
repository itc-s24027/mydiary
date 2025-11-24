// 詳細ページ 
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
import { getDiaryDetail } from "@/app/_libs/microcms";

type Props = {
  params: {
    id: string;
  };
};

// getDiaryDetail からidに基づく日記の詳細データを取得して表示
export default async function Page({params}: Props) {
  const data = await getDiaryDetail(params.id);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.board}>
          <Article data={data} />
        </div>
      </div>
      <ButtonLink href="/diary">日記一覧に戻る</ButtonLink>
    </>
  );
}
