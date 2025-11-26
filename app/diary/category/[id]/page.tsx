// カテゴリ別の日記一覧ページ
import { getDiaryesList } from "@/app/_libs/microcms";
import DiaryList from "@/app/_components/DiaryList";
import { DIARY_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { contents: diary } = await getDiaryesList({
    limit: DIARY_LIST_LIMIT,
    filters: `category[equals]${params.id}`,
  });

  return <DiaryList diarys={diary} />;
}
