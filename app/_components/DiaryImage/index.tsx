// 日記の画像を表示するコンポーネント

import Image from "next/image";

type Props = {
  images?: { url: string }[];
  width?: number;
  height?: number;
  className?: string;
};

export default function DiaryImage({
  images,
  width = 300,
  height = 200,
  className = "",
}: Props) {
  const imageUrl =
    images && images.length > 0
      ? images[0].url
      : "/images/next.js課題noimage画像.png";

  return (
    <Image
      src={imageUrl}
      alt="Diary Image"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "cover", borderRadius: "12px" }}
    />
  );
}
