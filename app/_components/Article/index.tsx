import Image from "next/image";
import { Diary } from "@/app/_libs/microcms";

type Props = {
  data: Diary;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1>{data.title}</h1>
      {data.image && data.image.length > 0 ? (
        data.image.map((img, index) => (
          <Image
            key={index}
            src={img.url}
            alt={data.title || "Diary Image"}
            width={300}
            height={300}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
        ))
      ) : (
        // 画像がなければNo Image画像を表示
        <Image
          src="/images/next.js課題noimage画像.png"
          alt="No Image"
          width={300}
          height={300}
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
      )}
      <p>{data.content}</p>
      <p>{new Date(data.date).toLocaleDateString()}</p>
    </main>
  );
}