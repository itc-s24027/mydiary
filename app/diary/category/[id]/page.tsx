// カテゴリ別の日記一覧ページ

export const dynamic = "force-dynamic";

import styles from "./page.module.css";
import { getDiaryesList} from "@/app/_libs/microcms";
import { getCategoryList } from "@/app/_libs/microcms";
import DiaryList from "@/app/_components/DiaryList";
import { DIARY_LIST_LIMIT } from "@/app/_constants";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { contents: diary } = await getDiaryesList({
    limit: DIARY_LIST_LIMIT,
    filters: `category[equals]${params.id}`, 
    //category フィールドが params.id と等しいものだけを取得
  });

    const categories = await getCategoryList();
    const category = categories.contents.find((cat) => cat.id === params.id);

  // DiaryListコンポーネントにフィルターかけたデータを渡す
  return (
    <>
      <h2 className={styles.title}>
        Category: {category.name}
      </h2>
      <DiaryList diarys={diary} />
      <ButtonLink href="/diary">日記一覧に戻る</ButtonLink>
    </>
  );
}
