## 📖日記投稿サイト
microCMSで管理できる日記投稿サイトです。
日記をカテゴリー別で表示したり、キーワード検索できます。
（日記の内容は架空の人物が投稿しています）


[サイトを見る👀](https://mydiary-umber.vercel.app/)

## 主な機能
- 日記の表示
- キーワード検索
- カテゴリー分け
- レスポンシブデザイン

## ページ構成
### トップページ
- 最新の投稿を2件表示
- カテゴリーの一覧設置

### 日記一覧ページ
- カテゴリーの一覧設置
- 日記を全件取得し、ページネーションで表示します

### 日記詳細ページ
- タイトル、画像、カテゴリー、日付、日記の内容を表示します

### カテゴリー別日記一覧ページ
- カテゴリーを押すとカテゴリーごとの日記一覧を表示します

## 使用技術
- **フレームワーク**：Next.js (App Router)
- **言語**：TypeScript
- **スタイリング**：CSS Module
- **データ管理**：microCMS
- **ソース管理**：Github
- **デプロイ**：Vercel
- **画像生成**：Gemini

## ディレクトリ構成
<details>
<summary>コンポーネント</summary>

Article：日記詳細ページで使う記事表示コンポーネント

ButtonLink：リンクつきボタンコンポーネント

CategoryButton：カテゴリー用の小ボタン

CategoryListBoard：カテゴリーをまとめて表示するボード

DiaryImage：日記ページで使う画像コンポーネント

DiaryList：日記一覧表示コンポーネント

Footer：フッター

Header：ヘッダー

Menu：スマホ用ハンバーガーメニュー

Pagination：ページネーション

SearchField：検索フォーム
</details>


<details>
<summary>ページ構成</summary>

app/page.tsx
— トップページ

app/diary/page.tsx
— 日記一覧ページ

app/diary/[id]/page.tsx
— 日記詳細ページ

app/diary/category/page.tsx
— カテゴリー一覧ページ

app/diary/category/[id]/page.tsx
— カテゴリー別日記一覧ページ

app/diary/p/[current]/page.tsx 
— ページネーションのページ

app/diary/search/page.tsx
— 検索結果ページ

</details>

## 未実装
カテゴリー別日記一覧ページでページネーションの実装
