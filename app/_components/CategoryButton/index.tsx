// カテゴリタグを表示するコンポーネント
import type { Category } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return (
    <Link href={`/diary/category/${category.id}`}>
      <span className={styles.tag}>{category.name}</span>
    </Link>
  );
}
