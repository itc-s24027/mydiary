import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getDiaryDetail } from "@/app/_libs/microcms";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({params}: Props) {
  const data = await getDiaryDetail(params.id);

  return (
    <>
      <Article data={data} />
      <ButtonLink href="/diary">日記一覧に戻る</ButtonLink>
    </>
  );
}
