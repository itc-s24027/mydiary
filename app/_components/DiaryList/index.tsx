import Image from "next/image";
import Link from "next/link";
import { Diary } from "@/app/_libs/microcms";

type Props = {
  diarys: Diary[];
  showOnlyTitleAndImage?: boolean;
};

export default function DiaryList({ diarys, showOnlyTitleAndImage = false }: Props) {
  return (
    <div>
      {diarys.length === 0 ? (
        <p>日記の投稿がありません</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {diarys.map((diary) => (
            <li key={diary.id} style={{ marginBottom: "2rem", width: "300px" }}>
              <Link href={`/diary/${diary.id}`}>
                {/* 最初の画像1枚だけ表示 */}
                {diary.image && diary.image.length > 0 ? (
                  <Image
                    src={diary.image[0].url}
                    alt={diary.title || "Diary Image"}
                    width={300}
                    height={300}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                  />
                ) : (
                  <Image
                    src="/images/next.js課題noimage画像.png"
                    alt="No Image"
                    width={300}
                    height={300}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                  />
                )}

                <h3 style={{ marginTop: "0.5rem" }}>{diary.title}</h3>

                <p>{new Date(diary.date).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
