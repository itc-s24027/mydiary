// ページネーション用ページ
import { notFound } from "next/navigation";
import { getDiaryesList } from "@/app/_libs/microcms";
import DiaryList from "@/app/_components/DiaryList";
import Pagination from "@/app/_components/Pagination";
import { DIARY_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        current: string;
    };
};

export default async function Page({ params }: Props) {
    const current = parseInt(params.current,10);

    // 不正なページ番号の場合は404エラーページを表示
    if (Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: diarys, totalCount } = await getDiaryesList({
        limit: DIARY_LIST_LIMIT,
        offset: DIARY_LIST_LIMIT * (current - 1),
    });

    // 日記の投稿がない場合は404エラーページを表示
    if (diarys.length === 0) {
        notFound();
    }

    return ( 
        <>
    <DiaryList diarys={diarys} />
    <Pagination totalCount={totalCount} current={current} />
    </>
    );
}