// カテゴリ一覧ページ
// microCMSからカテゴリ一覧を取得
import { getCategoryList } from "@/app/_libs/microcms";
import CategoryList from "@/app/_components/CategoryListBoard";

export default async function Page() {
  const categories = await getCategoryList();

  return (
    <main>
      {/* カテゴリ一覧のコンテンツだけ取り出す */}
      <CategoryList categories={categories.contents} />
    </main>
  );
}
