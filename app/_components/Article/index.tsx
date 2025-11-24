// 詳細ページコンポーネント
// [id]/page.tsx から渡されたデータを表示
import Image from "next/image";
import Carousel from "../Carousel";
import { Diary } from "@/app/_libs/microcms";

// 渡されたデータがDiary型であることを示す
type Props = {
  data: Diary;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1>{data.title}</h1>
      {data.image && data.image.length > 0 ? (
        <Carousel images={data.image} />
      ) : (
        <Image
          src="/images/next.js課題noimage画像.png"
          alt="No Image"
          width={600}
          height={600}
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
      )}
      <p>{data.content}</p>
      <p>{new Date(data.date).toLocaleDateString()}</p>
    </main>
  );
}