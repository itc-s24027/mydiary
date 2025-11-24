import { getDiaryesList } from "@/app/_libs/microcms";
import { TOP_DIARY_LIMIT } from "@/app/_constants";
import DiaryList from "@/app/_components/DiaryList";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: diary } = await getDiaryesList({
        limit: TOP_DIARY_LIMIT,
        q: searchParams.q,
    });

    return (
        <>
            <DiaryList diarys={diary} />
        </>
    );
}