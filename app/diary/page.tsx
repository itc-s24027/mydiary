// 一覧ページ

export const dynamic = "force-dynamic";

import styles from "./page.module.css";
import { getDiaryesList } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";
import DiaryList from "@/app/_components/DiaryList";
import Pagination from "@/app/_components/Pagination";
import CategoryList from "@/app/_components/CategoryListBoard";
import { getCategoryList } from "@/app/_libs/microcms";
import { DIARY_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
  const { contents: data, totalCount } = await getDiaryesList({
    limit: DIARY_LIST_LIMIT,
  });
  const categories = await getCategoryList();
  // console.log("🪄 getDiaryesList result:", JSON.stringify(data, null, 2));

  return (
    <div>
      <CategoryList categories={categories.contents} />
      <DiaryList diarys={data} />
      <ButtonLink href="/">Hame</ButtonLink>
      <Pagination totalCount={totalCount} />
    </div>
  );
}
