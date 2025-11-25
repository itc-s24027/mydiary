// 一覧ページ
import styles from "./page.module.css";
import { getDiaryesList } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";
import DiaryList from "@/app/_components/DiaryList";
import CategoryList from "@/app/_components/CategoryListBoard";
import { getCategoryList } from "@/app/_libs/microcms";

export default async function Page() {
  const data = await getDiaryesList();
  const categories = await getCategoryList();
  // console.log("🪄 getDiaryesList result:", JSON.stringify(data, null, 2));

  return (
    <div>
      <CategoryList categories={categories.contents} />
      <DiaryList diarys={data.contents} />
      <ButtonLink href="/">Hame</ButtonLink>
    </div>
  );
}
