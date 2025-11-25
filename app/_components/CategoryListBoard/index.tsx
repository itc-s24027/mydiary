// カテゴリ一覧を表示するコンポーネント
import Link from "next/link";
import styles from "./index.module.css";
import type { Category } from "@/app/_libs/microcms";

type Props = {
  categories: Category[];
};

export default function CategoryList({ categories }: Props) {
  return (
<div className={styles.categorySection}>
  <p className={styles.text}>category</p>
  <div className={styles.categoryList}>
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/diary/category/${cat.id}`}
          className={styles.tag}
        >
          {cat.name}
        </Link>
      ))}
    </div>
</div>
  );
}
