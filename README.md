## 📖日記閲覧サイト

作成時期： 2年生 11月

microCMSで日記を管理できる日記閲覧サイトです。
日記をカテゴリー別で表示したり、キーワード検索できます。
（日記の内容は架空の人物が投稿しています）


[サイトを見る👀](https://mydiary-umber.vercel.app/)

## 主な機能
- 日記の表示
- キーワード検索
- カテゴリー分け
- レスポンシブデザイン

## microCMSで管理しているコンテンツ
**日記**

- タイトル *
- 詳細 * (日記の内容)
- 日付 *
- カテゴリー * (カテゴリーのAPIから選択できる)
- 画像 (複数枚アップロード可能)

( " * " がついている項目は必須)

**カテゴリー**
- カテゴリーの名前

カテゴリーを自由に追加でき、日記投稿時にそのカテゴリーを選択できる


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
> ボタンや日記一覧ボードなど、複数のページで共通して使える UI 要素をコンポーネントとして切り出しています。これによりデザインを統一でき、各ページのコードもシンプルで読みやすくなりました。


<details>
<summary>ディレクトリ構成</summary>

```
app/
├── _components/                 # 再利用可能なUIコンポーネント群
│   ├── Article/
│   ├── ButtonLink/
│   ├── CategoryButton/
│   ├── CategoryListBoard/
│   ├── DiaryImage/
│   ├── DiaryList/
│   ├── Footer/
│   ├── Header/
│   ├── Menu/
│   ├── Pagination/
│   └── SearchField/
│
├── _constants/
│   └── index.ts                 # 定数（表示件数など）
│
├── _libs/
│   ├── microcms.ts              # microCMS クライアント設定
│   └── utils.ts                 # 共通ユーティリティ
│
├── diary/
│   ├── page.tsx                 # 日記一覧ページ
│   ├── index.module.css
│   ├── p/
│   │   └── [current]/
│   │       └── page.tsx         # ページネーション
│   ├── [id]/
│   │   ├── page.module.css
│   │   └── page.tsx             # 詳細ページ
│   ├── category/
│   │   ├── page.tsx             # カテゴリー一覧ページ
│   │   └── [id]/
│   │       ├── page.module.css
│   │       └── page.tsx         # カテゴリー別日記一覧ページ
│   └── search/
│       └── page.tsx             # 検索結果ページ
│
├── layout.tsx                   # 全ページ共通レイアウト
├── page.tsx                     # トップページ
├── page.module.css
├── not-found.tsx                # 404ページ
├── not-found.module.css
├── globals.css
└── favicon.ico

```
</details>


## 未実装or実装してみたい
- カテゴリー別日記一覧ページでページネーションの実装
- 日記投稿日が確認できるカレンダー
- 画像をカルーセルで表示
