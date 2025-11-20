// 一覧ページ
import { getDiaryesList } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";
import DiaryList from "@/app/_components/DiaryList";
import SearchField from "@/app/_components/SearchField";

export default async function Page() {
  const data = await getDiaryesList();
  // console.log("🪄 getDiaryesList result:", JSON.stringify(data, null, 2));

  return (
    <div>
      <SearchField />
      <DiaryList diarys={data.contents} />
      <ButtonLink href="/">Hame</ButtonLink>
    </div>
  );
}
