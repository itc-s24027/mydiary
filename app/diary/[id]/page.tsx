// 詳細ページ
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
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
      <Article data={data} />
      <ButtonLink href="/diary">日記一覧に戻る</ButtonLink>
    </>
  );
}
