// 検索キーワードを受け取って日記一覧を表示するページ
import { getDiaryesList } from "@/app/_libs/microcms";
import DiaryList from "@/app/_components/DiaryList";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: diary } = await getDiaryesList({
        q: searchParams.q,
    });

    return (
        <>
            <DiaryList diarys={diary} />
        </>
    );
}