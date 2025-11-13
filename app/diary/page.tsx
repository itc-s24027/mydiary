import { getDiaryesList } from "../_libs/microcms";
import ButtonLink from "../_components/ButtonLink";
import DiaryList from "../_components/DiaryList";

export default async function Page() {
  const data = await getDiaryesList();
  console.log("🪄 getDiaryesList result:", JSON.stringify(data, null, 2));

  return (
    <div>
      <h1>日記一覧</h1>
      <DiaryList diarys={data.contents} />
      <ButtonLink href="/">Hame</ButtonLink>
    </div>
  );
}
